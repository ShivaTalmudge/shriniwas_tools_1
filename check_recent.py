import os
import time

dir_path = "public/company_machines"
files = []
for f in os.listdir(dir_path):
    f_path = os.path.join(dir_path, f)
    if os.path.isfile(f_path):
        mtime = os.path.getmtime(f_path)
        files.append((f, mtime))

files.sort(key=lambda x: x[1], reverse=True)
for f, mtime in files:
    print(f"{f}: {time.ctime(mtime)}")
