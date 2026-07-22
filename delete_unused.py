import shutil
import os

paths = [
    "src/app/gallery",
    "src/app/services/dmc-dies",
    "src/app/services/dmc-molding-pune",
    "src/app/services/rubber-molds"
]

for p in paths:
    if os.path.exists(p):
        shutil.rmtree(p)
        print(f"Deleted {p}")
    else:
        print(f"Path not found {p}")
