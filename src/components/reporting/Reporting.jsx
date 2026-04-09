import './Reporting.css';
import { Tab, Nav } from "react-bootstrap";
import { HiDownload } from "react-icons/hi";

const reportsData = [
    {
        id: 1,
        title: "UN Sustainable Development Goals (SDGs)",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quod eius totam excepturi culpa repudiandae veniam? Quidem, cum magni! consectetur Lorem ipsum consectetur dolor sit amet consectetur adipisicing consectetur elit. Impedit recusandae animi aut laboriosam, nihil eaque a nulla quis vel esse voluptatem consectetur.",
        doc: "",
    },
    {
        id: 2,
        title: "Specifically SDG 2 (Zero Hunger)",
        desc: "Lorem ipsum dolor sit amet consectetur cum magni! Lorem ipsum dolor sit amet consectetur adipisicing adipisicing elit. Laborum voluptatem quod eius totam excepturi culpa veniam? Quidem, cum magni! Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit recusandae animi aut laboriosam, nihil eaque a nulla quis vel esse.",
        doc: "",
    },
    {
        id: 3,
        title: "SDG 7 (Affordable and Clean Energy)",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum amet consectetur adipisicing voluptatem quod eius totam excepturi culpa repudiandae veniam? Quidem, cum magni! Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit recusandae animi aut laboriosam, nihil eaque a nulla quis vel esse.",
        doc: "",
    },
    {
        id: 4,
        title: "SDG 13 (Climate Action)",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum voluptatem quod eius totam excepturi culpa repudiandae veniam? Quidem, cum magni! Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit recusandae animi aut laboriosam, nihil eaque a nulla quis vel esse dolor adipisicing.",
        doc: "",
    },
]

const Reporting = () => {
    return (
        <>
            <section className="reporting">
                <div className="reporting-head">
                    <div className="left">
                        <h5 data-aos="fade-up"><span>SUSTAINABILITY</span> <br /> REPORTING</h5>
                    </div>
                    <div className="right">
                        <b>Download our latest Annual Sustainability Report</b>
                        <p>to see our progress against UN Sustainable Development Goals (SDGs), specifically SDG 2 (Zero Hunger), SDG 7 (Affordable and Clean Energy), and SDG 13 (Climate Action).</p>
                    </div>
                </div>
                <div className="reports-tabbing-container">
                    <Tab.Container defaultActiveKey={reportsData[0].id}>

                        {/* Tab Navigation */}
                        <Nav variant="tabs" className="tab-head">
                            {reportsData.map((item) => (
                                <Nav.Item key={item.id}>
                                    <Nav.Link eventKey={item.id}>
                                        {item.title}
                                    </Nav.Link>
                                </Nav.Item>
                            ))}
                        </Nav>

                        {/* Tab Content */}
                        <Tab.Content>
                            {reportsData.map((item) => (
                                <Tab.Pane key={item.id} eventKey={item.id}>
                                    <span>{item.title}</span>
                                    <p>{item.desc}</p>
                                    <a href="#">
                                        <HiDownload className="download-icon"/> Download Report
                                    </a>
                                </Tab.Pane>
                            ))}
                        </Tab.Content>

                    </Tab.Container>
                </div>
            </section>
        </>
    )
}

export default Reporting
