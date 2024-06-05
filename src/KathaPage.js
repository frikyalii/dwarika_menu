import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer'; // Import the Footer component
import './KathaPage.css'; // Import the CSS file for custom styles

const KathaPage = () => {
  const [selectedMenu, setSelectedMenu] = useState(null);

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
  };

  const menuData = {
    food: [
      { 
        category: 'South Indian',
        items: [
          { name: 'Poha', description: 'Beef patty with cheese', price: '₹30' },
          { name: 'Upma', description: 'Vegetarian patty with veggies', price: '₹35' },
          { name: 'Shira', description: 'Beef patty with cheese', price: '₹40' },
          { name: 'Misal Pav', description: 'Vegetarian patty with veggies', price: '₹70' },
          { name: 'Idli Sambar', description: 'Beef patty with cheese', price: '₹60' },
          { name: 'Idli Vada Sambar', description: 'Vegetarian patty with veggies', price: '₹70' },
          { name: 'Batata Vada Sambar', description: 'Beef patty with cheese', price: '₹50' },
          { name: 'Batata Vada Sample', description: 'Vegetarian patty with veggies', price: '₹50' },
          { name: 'Puri Bhaji', description: 'Beef patty with cheese', price: '₹70' },
          { name: 'Plain Dosa', description: 'Vegetarian patty with veggies', price: '₹60' },
          { name: 'Masala Dosa', description: 'Beef patty with cheese', price: '₹8' },
          { name: 'Cheese Plain Dosa', description: 'Vegetarian patty with veggies', price: '₹7' },
          { name: 'Cut Cheese Masala Dosa', description: 'Beef patty with cheese', price: '₹8' },
          { name: 'Myusore Plain Dosa', description: 'Vegetarian patty with veggies', price: '₹7' },
          { name: 'Paper Plain Dosa', description: 'Beef patty with cheese', price: '₹8' },
          { name: 'Paper Masala Dosa', description: 'Vegetarian patty with veggies', price: '₹7' },
          { name: 'Dwarika Special Dosa', description: 'Vegetarian patty with veggies', price: '₹7' },
        ]
      },
    ],
    drinks: [
      {
        category: 'Hot Beverages',
        items: [
          { name: 'Tea', description: 'Freshly brewed coffee', price: '₹20' },
          { name: 'Black Tea', description: 'Fresh Tea', price: '₹15' },
          { name: 'Coffee', description: 'Freshly brewed coffee', price: '₹25' },
          { name: 'Black Coffee', description: 'Fresh Tea', price: '₹25' },
        ]
      },
      {
        category: 'Cold Beverages',
        items: [
          { name: 'Fresh Lime Soda', description: 'Freshly squeezed orange juice', price: '₹45' },
          { name: 'Fresh Lime Water', description: 'Freshly made lemonade', price: '₹25' },
          { name: 'Plain Butter Milk', description: 'Freshly squeezed orange juice', price: '₹30' },
          { name: 'Masala Butter Milk', description: 'Freshly made lemonade', price: '₹40' },
          { name: 'Sweet Lassi', description: 'Freshly made lemonade', price: '₹' },
        ]
      },
    ],
    events: [],
  };

  const renderMenu = () => {
    const menu = menuData[selectedMenu];
    if (!menu) {
      return null; // or some default content
    }
    return (
      <div>
        <h2>{selectedMenu.charAt(0).toUpperCase() + selectedMenu.slice(1)} Menu</h2>
        {menu.map((category, index) => (
          <div key={index}>
            <h3 className="text-danger food-menu">
              {category.category}
            </h3>
            <ul className="menu-list">
              {category.items.map((item, idx) => (
                <li key={idx} className="menu-item">
                  <div className="item-info">
                    <div className="item-name">{item.name}</div>
                    {/* <div className="item-description">{item.description}</div> */}
                  </div>
                  <div className="item-price">{item.price}</div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <Container className="text-center my-5 text-success">
        <Row className="justify-content-center mt-4 py-5">
          <Col xs={12} sm={6} md={3} className="mb-4">
            <Card 
              className={`shadow-sm menu-card ${selectedMenu === 'food' ? 'active' : ''}`} 
              onClick={() => handleMenuClick('food')}
            >
              <Card.Body>
                <Card.Text>
                  <span role="img" aria-label="burger">🍔</span><br/>
                  Food Menu
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={3} className="mb-4">
            <Card 
              className={`shadow-sm menu-card ${selectedMenu === 'drinks' ? 'active' : ''}`} 
              onClick={() => handleMenuClick('drinks')}
            >
              <Card.Body>
                <Card.Text>
                  <span role="img" aria-label="coffee">☕</span><br/>
                  Drinks Menu
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <div>
          {selectedMenu && renderMenu()}
        </div>
      </Container>
      <Footer /> {/* Include the Footer component */}
    </div>
  );
};

export default KathaPage;
