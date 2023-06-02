import ReactPDF, {
  PDFDownloadLink,
  Page,
  PDFViewer,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  doc: {
    height: "500px",
    width: "700px",
    display: "row",
  },
  page: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#E0FFFF",
  },
  id_left: {
    paddingLeft: "6px",
    display: "flex column",
    width: "350px",
    borderRight: "1px",
    borderRadius: "5px",
  },
  image: {
    height: "170px",
    borderRadius: "50%",
    //width:"340px"
  },
  pinfo: {
    textAlign: "center",
    fontSize: "20px",
  },
  id_right: {
    paddingLeft: "10px",
    display: "flex column",
    width: "600px",
    borderRight: "1px",
  },
});
const MyDocument = () => (
  <Document style={styles.doc} pageMode="fullScreen" pageLayout="singlePage">
    <Page size="A4" style={styles.page}>
      <View id="id_left" style={styles.id_left}>
        <Image
          style={styles.image}
          src="https://media.licdn.com/dms/image/C5603AQGVhTn0cvkcRw/profile-displayphoto-shrink_800_800/0/1661930138028?e=2147483647&v=beta&t=eOwHOZQG1XdsGw2u5S0BP_xb438QudkAgTj33ttcShQ"
        ></Image>
        <Text style={styles.pinfo}>Personal Info</Text>
        <Text>Section #1</Text>
        <Text>Section #1</Text>
        <Text>Section #1</Text>
      </View>
      <View id="id_right" style={styles.id_right}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);
function Downloadable() {
  return (
    <div>
      <PDFDownloadLink document={<MyDocument />} fileName="somename.pdf">
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download now!"
        }
      </PDFDownloadLink>
    </div>
  );
}
// Create Document Component
function App() {
  return (
    <div className="pt-5 w-100" style={{ height: "100vh" }}>
      <PDFViewer>
        <MyDocument />
      </PDFViewer>
      <Downloadable />
    </div>
  );
}

export default App;
