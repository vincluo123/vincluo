import React from 'react';
import '../cssfiles/girlsSection.css'; // Import your CSS file for styling

function Girls(){

  return (
    <div class="section">
		
			<div class="container">
		
				<div class="row">
				
					<div class="col-md-3 col-xs-6">
						<div class="shop">
							<div class="shop-img">
								<img src="./img/shop01.png" alt="">
							</div>
							<div class="shop-body">
								<h3>Women<br>Collection</h3>
								<a href="#" class="cta-btn">Shop now <i class="fa fa-arrow-circle-right"></i></a>
							</div>
						</div>
					</div>
					

				
					<div class="col-md-3 col-xs-6">
						<div class="shop">
							<div class="shop-img">
								<img src="./img/shop02.png" alt="">
							</div>
							<div class="shop-body">
								<h3>Men<br>Collection</h3>
								<a href="#" class="cta-btn">Shop now <i class="fa fa-arrow-circle-right"></i></a>
							</div>
						</div>
					</div>
			

			
					<div class="col-md-3 col-xs-6">
						<div class="shop">
							<div class="shop-img">
								<img src="./img/shop03.png" alt="">
							</div>
							<div class="shop-body">
								<h3>Kids<br>Collection</h3>
								<a href="#" class="cta-btn">Shop now <i class="fa fa-arrow-circle-right"></i></a>
							</div>
						</div>
					</div>
					<div class="col-md-3 col-xs-6">
						<div class="shop">
							<div class="shop-img">
								<img src="./img/shop04.png" alt="">
							</div>
							<div class="shop-body">
								<h3>Apparels<br>Collection</h3>
								<a href="#" class="cta-btn">Shop now <i class="fa fa-arrow-circle-right"></i></a>
							</div>
						</div>
					</div>

				
					  

					
					
					<div class="col-md-3 col-xs-6">
						<div class="box">
							<div class="imgBox">
								<img src="img/shop01.png" alt="">
							</div>
							<div class="content">
								<h2>Karan Singh</br>
								<span>Graphic Designer</span></h2>
							</div>
						</div>
					</div>

					
				

				</div>
				
			</div>
			
		</div>
  );
};

export default Girls;