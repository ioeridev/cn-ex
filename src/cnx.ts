/**
 * Memungkinkan menerima lebih dari satu nilaiPertama dan nilaiKedua:
 *- Kami menggunakan rest parameter `...additionalClassNames` yang mengizinkan lebih dari satu argumen untuk nilaiKedua.
 *- Dengan demikian, Anda dapat menggunakan fungsi **`cnx`** dengan memberikan banyak nilaiPertama dan nilaiKedua, seperti dalam contoh berikut:
  ```js
  const clN = cnx(
    ['class_root', `variant-${variant}`, `size-${props.size}`, !(variant === 'unstyled') && classes.root],
    classNames?.root,
    className
  );
  ...
  * // Contoh dengan banyak nilaiPertama dan nilaiKedua
  * <div className={cnx(['class1', 'class2', clN], classNames?.root, className, `additionalClass`, `additionalClass`)} />

  // Contoh penggunaan di komponen induk
  * <ModuleComponent className="h-6 w-6" />
  * <ModuleComponent className={['h-6', 'w-6']} />
  ```
 *- Dengan ini, fungsi cnx dapat menerima lebih dari satu nilaiPertama dan nilaiKedua untuk menggabungkan kelas-kelas dengan lebih fleksibel.
 *>
 */
export function cnx(
  classNames: (string | false | undefined) | (string | false | undefined)[],
  ...additionalClassNames: (string | false | undefined | null)[]
): string {
  let classNamesArray = Array.isArray(classNames) ? classNames : [classNames];

  // Filtering untuk menghapus nilai false dan undefined
  classNamesArray = classNamesArray.filter((className) => typeof className === 'string');

  const combinedClassNames = [...classNamesArray];

  additionalClassNames.forEach((className) => {
    if (className) {
      combinedClassNames.push(className);
    }
  });

  return combinedClassNames.join(' ');
}
