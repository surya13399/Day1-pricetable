
import './App.css';

function App() {
  return (
    <div id="root">
    <div class="container">
      <div class="free">
          <h4 class="price">FREE</h4>
          <p class="plan-amount">0$
          <span class="plan-duration">/month</span></p>
          <hr></hr>
          <ul class="plan-list">
            <li>Single User</li>
            <li>5GB Storage</li>
            <li>Unlimited Public Projects</li>
            <li>Community Access</li>
            <li>Unlimited Private Projects</li>
            <li>Dedicated Phone Support</li>
            <li>Free Subdomain</li>
            <li>Monthly Status Reports</li>
          </ul>
          <button>BUTTON</button>
      </div>
      <div class="plus">
          <h4 class="price">PLUS</h4>
          <p class="plan-amount">$9
          <span class="plan-duration">/month</span></p>
          <hr></hr>
          <ul class="plan-list">
            <li>5 User</li>
            <li>50GB Storage</li>
            <li>Unlimited Public Projects</li>
            <li>Community Access</li>
            <li>Unlimited Private Projects</li>
            <li>Dedicated Phone Support</li>
            <li>Free Subdomain</li>
            <li>Monthly Status Reports</li>
          </ul>
          <button>BUTTON</button>
      </div>
      <div class="pro">
          <h4 class="price">PRO</h4>
          <p class="plan-amount">$49
          <span class="plan-duration">/month</span></p>
          <hr></hr>
          <ul class="plan-list">
            <li><b>Unlimited users</b></li>
            <li>150GB Storage</li>
            <li>Unlimited Public Projects</li>
            <li>Community Access</li>
            <li>Unlimited Private Projects</li>
            <li>Dedicated Phone Support</li>
            <li>Free Subdomain</li>
            <li>Monthly Status Reports</li>
          </ul>
          <button>BUTTON</button>
      </div>
    </div>
</div>  
  );
}

export default App;
