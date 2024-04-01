import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";

type ComponentPageProps = {
  slug: string;
};

const ComponentPage: NextPage<ComponentPageProps> = ({ slug }) => {
  return <h1>Você acessou: {slug}</h1>;
};
export default ComponentPage;

type Params = {
  slug: string;
};
export function getServerSideProps({
  params,
}: GetServerSidePropsContext<Params>) {
  if (params) {
    const { slug } = params;

    return {
      props: {
        slug,
      },
    };
  } else {
    return {
      redirect: {
        destination: "/",
      },
    };
  }
}
