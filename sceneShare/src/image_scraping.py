import os, requests

# Character name + image URL pairs
urls = [
    ("Monkey D. Luffy", "https://static.wikia.nocookie.net/onepiece/images/a/a9/Monkey_D._Luffy_Portrait.png/revision/latest/scale-to-width-down/119?cb=20250205221743"),
    ("Roronoa Zoro", "https://static.wikia.nocookie.net/onepiece/images/5/5d/Roronoa_Zoro_Portrait.png/revision/latest/scale-to-width-down/119?cb=20200703083233"),
    ("Nami", "https://static.wikia.nocookie.net/onepiece/images/2/26/Nami_Portrait.png/revision/latest/scale-to-width-down/119?cb=20211209030803"),
    ("Usopp", "https://static.wikia.nocookie.net/onepiece/images/9/97/Usopp_Portrait.png/revision/latest/scale-to-width-down/119?cb=20190821161843"),
    ("Sanji", "https://static.wikia.nocookie.net/onepiece/images/0/0c/Sanji_Portrait.png/revision/latest/scale-to-width-down/119?cb=20230204061747"),
    ("Tony Tony Chopper", "https://static.wikia.nocookie.net/onepiece/images/8/84/Tony_Tony_Chopper_Portrait.png/revision/latest/scale-to-width-down/119?cb=20191225101353"),
    ("Nico Robin", "https://static.wikia.nocookie.net/onepiece/images/9/90/Nico_Robin_Post_Timeskip_Portrait.png/revision/latest/scale-to-width-down/119?cb=20240110100209"),
    ("Franky", "https://static.wikia.nocookie.net/onepiece/images/a/a8/Franky_Portrait.png/revision/latest/scale-to-width-down/119?cb=20200426030735"),
    ("Brook", "https://static.wikia.nocookie.net/onepiece/images/3/37/Brook_Portrait.png/revision/latest/scale-to-width-down/119?cb=20200426030609"),
    ("Jinbe", "https://static.wikia.nocookie.net/onepiece/images/f/f7/Jinbe_Portrait.png/revision/latest/scale-to-width-down/119?cb=20200426030056")
]

# Create main folder
output_dir = "straw_hat_images"
os.makedirs(output_dir, exist_ok=True)

# Download and save each image with its character name
for name, url in urls:
    filename = name.replace(" ", "_") + ".png"
    save_path = os.path.join(output_dir, filename)

    print(f"Downloading {name} ...")
    resp = requests.get(url)
    resp.raise_for_status()

    with open(save_path, "wb") as f:
        f.write(resp.content)

    print(f"✅ Saved as {filename}")

print("\n🎉 All Straw Hat Pirate images downloaded successfully into 'straw_hat_images' folder.")
