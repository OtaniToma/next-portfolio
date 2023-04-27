import styled from "../styles/Layout.module.scss";

const Layout = ({ children }) => (
  <>
    <div className={styled.container}>
      {children}
    </div>
  </>
)

export default Layout