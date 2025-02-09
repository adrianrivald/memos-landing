import Head from "next/head";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import {
  Client,
  Contact,
  Faq,
  Hero,
  Products,
  Testimoni,
  WhyUs,
  Banner,
} from "../components";
import { useTranslation } from "next-i18next";
import { GetStaticProps } from "next";

export default function HomePage() {
  const { t } = useTranslation("common");
  const router = useRouter();
  const onClickToDemo = () => {
    router.push("/demo");
  };
  return (
    <div>
      <Head>
        <title>Memos Healthcare CRM</title>
        <meta
          name="description"
          content="Sistem CRM Healthcare yang dirancang untuk beradaptasi dengan anda bekerja, mengintegrasikan berbagai aspek operasional kesehatan ke dalam satu platform yang intuitif dan mudah digunakan"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preload"
          as="image"
          href="/assets/images/dokter-hero-mobile.webp"
        />
      </Head>

      <main className="mt-[1.5rem]">
        <Hero t={t} onClickToDemo={onClickToDemo} />
        <WhyUs t={t} />
        <Products t={t} />
        <Client t={t} />
        {/* <Testimoni t={t} /> */}
        <Faq t={t} />
        <Contact t={t} />
        <Banner t={t} onClickToDemo={onClickToDemo} />
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps<any> = async ({ locale }) => ({
  props: {
    locale,
    ...(await serverSideTranslations(locale ?? "id", ["common"])),
  },
});
