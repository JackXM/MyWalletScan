import MenuHeader from "@pages/MenuHeader/index.jsx";
import Zksync from "@pages/Zksync/index.jsx";
import {useLocation} from "react-router-dom";
import Stark from "@pages/Stark/index.jsx";
import {Layout} from "antd";

import Layer from "@pages/Layer/index.jsx";
import Mirror from "@pages/Mirror/index.jsx";
import Deposit from "@pages/Deposit/index.jsx";

function MainPage() {
    const location = useLocation()
    return (
        <div
            style={{
                backgroundColor: "#f0f2f5",
            }}
        >
            <Layout>
                <div
                    style={{
                        position: "fixed",
                        top: 0,
                        width: "100%",
                        zIndex: 1000,
                    }}
                >
                    <MenuHeader
                        style={{
                            backgroundColor: "#f0f2f5",
                            borderBottom: "1px solid #e8e8e8",
                            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.06)",
                        }}
                    />
                </div>
                <div
                    style={{
                        paddingTop: "25px",
                        minHeight: "95vh",
                        backgroundColor: "#fff",
                        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.06)",
                        borderRadius: "4px",
                        marginTop: "20px",
                    }}
                >
                    <div>
                        {location.pathname === "/" && <Zksync/>}
                        {location.pathname === "/zksync" && <Zksync/>}
                        {location.pathname === "/stark" && <Stark/>}
                        {location.pathname === "/layer" && <Layer/>}
                        {location.pathname === "/mirror" && <Mirror/>}
                        {location.pathname === "/deposit" && <Deposit/>}
                    </div>
                </div>
            </Layout>
        </div>
    );
}

export default MainPage;
