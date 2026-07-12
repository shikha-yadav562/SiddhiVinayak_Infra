from PIL import Image
import glob

for img_path in glob.glob('images/proj*.png'):
    try:
        with Image.open(img_path) as img:
            print(f"{img_path}: {img.size}")
    except Exception as e:
        print(f"Error reading {img_path}: {e}")
