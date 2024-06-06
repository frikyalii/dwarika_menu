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
          { name: 'Poha', description: 'A delicious breakfast dish made from flattened rice', price: '₹30' },
          { name: 'Upma', description: 'A savory South Indian breakfast dish made from semolina', price: '₹35' },
          { name: 'Shira', description: 'A sweet Indian dessert made from semolina and sugar', price: '₹40' },
          { name: 'Misal Pav', description: 'A spicy curry made from sprouted moth beans and served with bread', price: '₹70' },
          { name: 'Idli Sambar', description: 'Steamed rice cakes served with lentil soup', price: '₹60' },
          { name: 'Idli Vada Sambar', description: 'Combination of steamed rice cakes and fried lentil doughnuts with lentil soup', price: '₹70' },
          { name: 'Batata Vada Sambar', description: 'Fried potato dumplings served with lentil soup', price: '₹50' },
          { name: 'Batata Vada Sample', description: 'Sample of fried potato dumplings', price: '₹50' },
          { name: 'Puri Bhaji', description: 'Fried bread served with spiced potato curry', price: '₹70' },
          { name: 'Plain Dosa', description: 'Thin, crispy pancake made from rice batter', price: '₹60' },
          { name: 'Masala Dosa', description: 'Thin, crispy pancake filled with spiced potatoes', price: '₹80' },
          { name: 'Cheese Plain Dosa', description: 'Thin, crispy pancake topped with cheese', price: '₹70' },
          { name: 'Cut Cheese Masala Dosa', description: 'Thin, crispy pancake filled with spiced potatoes and cheese', price: '₹80' },
          { name: 'Mysore Plain Dosa', description: 'Thin, crispy pancake with a spicy chutney spread', price: '₹70' },
          { name: 'Paper Plain Dosa', description: 'Extra thin and crispy rice pancake', price: '₹80' },
          { name: 'Paper Masala Dosa', description: 'Extra thin and crispy rice pancake filled with spiced potatoes', price: '₹70' },
          { name: 'Dwarika Special Dosa', description: 'Special house dosa with a unique filling', price: '₹70' },
        ]
      },
    ],
    drinks: [
      {
        category: 'Hot Beverages',
        items: [
          { name: 'Tea', description: 'Freshly brewed tea', price: '₹20' },
          { name: 'Black Tea', description: 'Fresh black tea', price: '₹15' },
          { name: 'Coffee', description: 'Freshly brewed coffee', price: '₹25' },
          { name: 'Black Coffee', description: 'Fresh black coffee', price: '₹25' },
        ]
      },
      {
        category: 'Cold Beverage',
        items: [
          { name: 'Fresh Lime Soda', description: 'Freshly squeezed lime soda', price: '₹45' },
          { name: 'Fresh Lime Water', description: 'Freshly made lime water', price: '₹25' },
          { name: 'Plain Butter Milk', description: 'Chilled buttermilk', price: '₹30' },
          { name: 'Masala Butter Milk', description: 'Chilled buttermilk with spices', price: '₹40' },
          { name: 'Sweet Lassi', description: 'Chilled sweet yogurt drink', price: '₹50' },
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
                    <div className="item-description">{item.description}</div>
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
