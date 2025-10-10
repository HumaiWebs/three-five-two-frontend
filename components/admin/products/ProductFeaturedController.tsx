import { Switch } from "@/components/ui/switch";
import { useEffect, useState } from "react";

type Props = {
  isFeatured: boolean;
}
const ProductFeaturedController = ({ isFeatured }: Props) => {
  const [checked, setChecked] = useState(isFeatured);

  useEffect(() => {
    setChecked(isFeatured);
  }, [isFeatured]);

  return <Switch onChange={() => {
    setChecked(!checked);
  }} checked={checked} id="is-product-featured" />;
}

export default ProductFeaturedController;
