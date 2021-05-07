import sass

sass_map = {
    "source/css/styles.scss": "public/css/styles.css",
    #"source/css/static-footer/static-footer.scss": "public/css/static-footer/static-footer.css"
}

def compile_sass_to_css(sass_map):

    print("Compiling scss to css:")

    for source, dest in sass_map.items():
        with open(dest, "w") as outfile:
            outfile.write(sass.compile(filename=source))
        print(f"{source} compiled to {dest}")


if __name__ == "__main__":
    compile_sass_to_css(sass_map)