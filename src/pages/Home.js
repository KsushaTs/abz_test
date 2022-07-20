import React, { Suspense } from "react";
import Layout from "../components/Layout";
import TitleBlock from "../components/TitleBlock";
import Cards from "../components/Cards";
// import Form from "../components/Form";

const Form = React.lazy(() => import("../components/Form"));

const Home = () => {
  return (
    <Layout>
      <main className="page">
        <TitleBlock />
        <Cards />

        {/* <Form /> */}

        <Suspense fallback={<div>loading...</div>}>
          <Form />
        </Suspense>
      </main>
    </Layout>
  );
};

export default Home;
