import Link from "next/link";
// Para importar o arquivo css apenas para módulo e add className nome do aquivo.nome da classe no css:
import styles from "./Menu.module.css";
const Menu = () => {
  return (
    <nav className="column side" style={{ backgroundColor: "#aaa" }}>
      <ul>
        {/* Exemplo de uso de css module eu tenhu uma variável no className que é o nome que eu dei no import do arquivo com o nome que eu dei na classe: */}
        <li className={styles.li}>
          <Link legacyBehavior href="/">
            <a>HOME</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="/about">
            <a>ABOUT</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="/contact">
            <a>CONTACT</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
