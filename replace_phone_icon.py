file_path = r"C:\Users\itsya\OneDrive\Documents\client-sites\client-previews\Ali bake restaurant\al-baik-restaurant-website\index.html"
old_string = '<i class="fas fa-phone my-float" style="margin-top:16px;"></i>'
new_string = '<img src="../images/phone logo.png" alt="Phone Logo" style="width: 30px; height: 30px; margin-top:15px;"/>'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

modified_content = content.replace(old_string, new_string)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(modified_content)

print("Phone icon replaced successfully in index.html")
