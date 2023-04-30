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
            Page 1 Title
          </Link>
        </li>
        <li>
          <Link id="2" href="/products">
            Products Title
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
