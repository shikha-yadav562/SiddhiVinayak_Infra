import cv2
print("Images info:")
for p in ['images/new_map.png', 'images/map.png', 'images/golden_map.png']:
    try:
        img = cv2.imread(p)
        print(f"{p}: {img.shape if img is not None else 'Not Found'}")
    except: pass
