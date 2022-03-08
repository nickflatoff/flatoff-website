import { NextPage } from "next";
import MainLayout from "../layouts/defaultLayout";
import SecondaryLayout from "../layouts/secondary.layout";

type PageWithLayoutType = NextPage &
  ({ layout: typeof MainLayout } | { layout: typeof SecondaryLayout });

export default PageWithLayoutType;
