import Link from "next/link";

const Menu = () => {
  return (
    <div>
      <ul>
        <li>
          <Link id="0" href="/">
            Index
          </Link>
        </li>
        <li>
          <Link id="1" href="/page1">
            Page 1
          </Link>
        </li>
        <li>
          <Link id="2" href="/page2">
            Page 2
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
