text = r"\347\224\250\346\210\267\350\264\246\346\210\267\346\224\266\346\254\276\345\274\202\345\270\270"
decoded_text = eval(f"b'{text}'").decode('utf-8')
print(decoded_text)