import { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Container, Navbar, Nav } from 'react-bootstrap'
import { About } from "./pages/about"
import { Home } from "./pages/home"
import { Shop } from "./pages/shop"
import { SummaryOrder } from "./pages/summaryOrder"

export function Aplication() {

  const [jsonData, setJsonData] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/shop')
      .then(response => response.json())
      .then(response => setJsonData(response))
      .catch(error => console.log(error))
  }, [])

  return (
    <Container className="m-0 p-0 justify-content-center" style={{width: "100vw", boxSizing: "border-box"}}>
      <Router>
          <Navbar className="d-flex justify-content-around" style={{width: "100vw", height: "10vh"}}>
            <Nav.Item>
              <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/shop">Shop</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav.Item>
          </Navbar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop jsonData={jsonData}/>} />
          <Route path="/about" element={<About />} />
          <Route path="/summary-order" element={<SummaryOrder />}/>
        </Routes>
      </Router>
    </Container>
  )
}