import Link from "next/link";

const Menu = () => {
  return (
    <div>
      <ul class="flex">
        <li class="mr-6">
          <Link class="text-blue-500 hover:text-blue-800" id="0" href="/">
            Index
          </Link>
        </li>
        <li class="mr-6">
          <Link class="text-blue-500 hover:text-blue-800" id="1" href="/page1">
            Page
          </Link>
        </li>
        <li class="mr-6">
          <Link
            class="text-blue-500 hover:text-blue-800"
            id="2"
            href="/products"
          >
            Products
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
