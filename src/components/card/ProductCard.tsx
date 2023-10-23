import ProductType from "@/types/product";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ title, image, price, _id }: ProductType) => {
  return (
    <div className="product-card">
      <div className="relative" style={{ height: "200px" }}>
        <Image
          src={image?.url}
          alt={title}
          // placeholder="blur"
          fill
          // width={0}
          // height={0}
          objectFit="cover"
          // style={{ width: "100%", height: "200px" }}
        />
      </div>
      <span className="bg-[red] my-3 inline-block rounded-[4px] px-4 py-2">
        {price}
      </span>
      <Link href={`/products/${_id}`}>
        <h3>{title}</h3>
      </Link>
    </div>
  );
};

export default ProductCard;
