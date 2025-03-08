interface ProcessImageOptions {
  maxWidth?: number;
  maxHeight?: number;
  quality?: number;
}

const useImageProcessor = () => {
  const processImage = async (
    file: File,
    options: ProcessImageOptions = {
      maxWidth: 1080,
      maxHeight: 1920,
      quality: 0.8,
    }
  ): Promise<string> => {
    // Image processing logic: resizing, format conversion
    // Returns processed base64 image
    return new Promise((resolve, reject) => {
      const img = new Image();
      const reader = new FileReader();

      reader.onload = (event) => {
        img.src = event.target?.result as string;

        img.onload = () => {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");

          if (!ctx) {
            reject(new Error("Failed to get canvas context"));
            return;
          }

          const maxWidth = options.maxWidth ?? 1080;
          const maxHeight = options.maxHeight ?? 1920;
          const quality = options.quality ?? 0.8;

          let { width, height } = img;

          if (width > maxWidth || height > maxHeight) {
            if (width / height > maxWidth / maxHeight) {
              height = Math.round((height * maxWidth) / width);
              width = maxWidth;
            } else {
              width = Math.round((width * maxHeight) / height);
              height = maxHeight;
            }
          }

          canvas.width = width;
          canvas.height = height;
          ctx.drawImage(img, 0, 0, width, height);

          canvas.toBlob(
            (blob) => {
              if (blob) {
                const reader = new FileReader();
                reader.onloadend = () => {
                  resolve(reader.result as string);
                };
                reader.readAsDataURL(blob);
              } else {
                reject(new Error("Canvas is empty"));
              }
            },
            "image/jpeg",
            quality
          );
        };

        img.onerror = () => {
          reject(new Error("Failed to load image"));
        };
      };

      reader.onerror = () => {
        reject(new Error("Failed to read file"));
      };

      reader.readAsDataURL(file);
    });
  };

  return { processImage };
};

export default useImageProcessor;
