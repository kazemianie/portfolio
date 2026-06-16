"""Remove the background from the profile photo for the portfolio hero.

Usage:
    python remove_bg.py

Looks for assets/profile_raw.(jpg|jpeg|png) and writes a transparent
assets/profile.png with the background removed.
"""
import glob
import sys

try:
    from rembg import remove
except ImportError:
    sys.exit(
        "The 'rembg' package is not installed.\n"
        "Install it with:  pip install rembg onnxruntime pillow"
    )

from PIL import Image


def main() -> None:
    candidates = []
    for ext in ("jpg", "jpeg", "png", "webp"):
        candidates += glob.glob(f"assets/profile_raw.{ext}")
    if not candidates:
        sys.exit(
            "No source image found.\n"
            "Save your photo as 'assets/profile_raw.jpg' (or .png) and rerun."
        )

    src = candidates[0]
    print(f"Processing {src} ...")
    with Image.open(src) as img:
        result = remove(img.convert("RGBA"))
    out = "assets/profile.png"
    result.save(out)
    print(f"Saved background-removed image to {out}")


if __name__ == "__main__":
    main()
