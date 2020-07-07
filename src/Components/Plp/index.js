import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRupeeSign,
  faHeart,
  faStar,
  faCircle,
  faBars
} from "@fortawesome/free-solid-svg-icons";
import { Row, Col, Card,Dropdown } from "react-bootstrap";

const PLP = props => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("/data/plp.json")
      .then(response => response.json())
      .then(data => {
        const allProducts = data.products;
        const getProducts = allProducts.filter(prod => {
          return prod.title.toLowerCase().includes(props.match.params.id.toLowerCase()) && prod
        });
        setProduct(getProducts);
      })
      .catch(e => console.log(e));
  }, []);
  
  return (
    <React.Fragment>
        <Container className="plp-options">
                    <Row>
                        <Col className="filter-icon d-flex">
                          <div className="d-flex align-items-center"
                          ><FontAwesomeIcon icon={faBars} /> Filter</div>
                        </Col>
                        <Col className="text-center d-flex justify-content-center align-items-center text-uppercase plp-product-title">
                          {props.match.params.id}
                        </Col>
                        <Col className="text-right sortby">
                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic">Sort By</Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Relavance</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Low to High</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">High to Low</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        </Col>
                    </Row>
                </Container>
      <Container>
        <Row>
          {product &&
            product.map((prod, index) => {
              return (
                <Col xs={12} className="plp-prod" key={index}>
                  <Card>
                    <Row>
                      <Col md={3} className="prod-image">
                        <Card.Img
                          width="100%"
                          src={prod.imageLink}
                          alt="Card image cap"
                          className="plp-prod-img w-100"
                        />
                      </Col>
                      <Col xs={9}>
                        <Card.Body className="w-100">
                          <Card.Title className="d-flex">
                            <div className="w-100">{prod.title}</div>
                            <div className="w-100 add-to-wishlist">
                              <FontAwesomeIcon icon={faHeart} />
                            </div>
                          </Card.Title>
                          <div className="d-flex">
                            <div className="w-100">
                              <ul className="prod-desc-list">
                                {prod.bulletPoints.map((list, index) => {
                                  return (
                                    <li key={index}>
                                      <FontAwesomeIcon icon={faCircle} />{" "}
                                      <span className="pl-2">{list}</span>
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                            <div className="w-100">
                              <div className="text-center prod-price-sec">
                                <div className="prod-price-current price-old">
                                  <FontAwesomeIcon icon={faRupeeSign} />
                                  <span className="pl-1 price-oldPrice">
                                    {prod.price.value}
                                  </span>
                                  <span className="pl-1 price-discount">{`${prod.offers.baseDiscount} %off`}</span>
                                </div>
                                <div className="prod-price-current price-new">
                                  <FontAwesomeIcon icon={faRupeeSign} />
                                  <span className="pl-1">
                                    {parseFloat(prod.price.value).toFixed(2) -
                                      (
                                        (parseFloat(prod.price.value) *
                                          parseFloat(
                                            prod.offers.baseDiscount
                                          )) /
                                        100
                                      ).toFixed(2)}
                                  </span>
                                </div>
                              </div>
                              <div className="text-center prod-price-emi">
                                <h6 className="text-uppercase">No Cost EMI</h6>
                              </div>
                              <div className="prod-reviews text-center">
                                <FontAwesomeIcon icon={faStar} />
                                <span> 4.5/5 (203 reviews)</span>
                              </div>
                            </div>
                          </div>
                        </Card.Body>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              );
            })}
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default PLP;
