import RootStyleRegistry from "./emotion";
import "./globals.css";

export const metadata = {
	title: "Nextjs Ebay Scrapper",
	description:
		"Scrape Product information from Ebay and amazon with bigdata & nextjs",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en-US'>
			<head />
			<body>
				<RootStyleRegistry>{children}</RootStyleRegistry>
			</body>
		</html>
	);
}
