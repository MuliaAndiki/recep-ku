import LandingLayout from "@/app/components/pages/landing-page/layout";
export default function LandingPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <LandingLayout>{children}</LandingLayout>
    </>
  );
}
