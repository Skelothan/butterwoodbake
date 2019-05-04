/* HTML text for dynamic page loading. You can scroll past this... */
var cakeForm = '<form id="cakeForm">\
			<div class="row">\
				<div class="col_abc">\
					<div class="mainpagebox">\
						<fieldset>\
							<legend>Cake size<span class="required" title="Required field">*</span></legend>\
							<input type="radio" name="cakeSize" required><label>Small, 6" ($35 +)</label><br>\
							<input type="radio" name="cakeSize" required><label>Medium, 8" ($45 +)</label><br>\
							<input type="radio" name="cakeSize" required><label>Large, 9" ($55 +)</label><br>\
						</fieldset>\
					</div>\
				</div>\
			</div>\
			<div class="row">\
				<div class="col_c">\
					<div class="mainpagebox">\
						<fieldset>\
							<legend>Cake base<span class="required" title="Required field">*</span></legend>\
							<select name="cakeBase" form="cakeForm" required>\
								<option value=""></option>\
								<option value="oliveOil">Olive Oil</option>\
								<option value="vegan">Vegan</option>\
							</select>\
						</fieldset>\
					</div>\
				</div>\
				<div class="col_c">\
					<div class="mainpagebox">\
						<fieldset>\
							<legend>Cake flavor<span class="required" title="Required field">*</span></legend>\
							<select name="cakeFlavor" form="cakeForm" required>\
								<option value=""></option>\
								<option value="chocolate">Chocolate</option>\
								<option value="yellow">Yellow</option>\
								<option value="etc">etc.</option>\
							</select>\
						</fieldset>\
					</div>\
				</div>\
				<div class="col_c">\
					<div class="mainpagebox">\
						<fieldset>\
							<legend>Icing flavor<span class="required" title="Required field">*</span></legend>\
							<select name="icingFlavor" form="cakeForm" required>\
								<option value=""></option>\
								<option value="chocolate">Chocolate</option>\
								<option value="vanilla">Vanilla</option>\
								<option value="etc">etc.</option>\
							</select>\
						</fieldset>\
					</div>\
				</div>\
			</div>\
			<div class="row">\
				<div class="col_abc">\
					<div class="mainpagebox">\
						<fieldset>\
							<legend>Additions (optional. Costs extra)</legend>\
							<input type="checkbox" name="lemonCurd"><label>Lemon Curd</label><br>\
							<input type="checkbox" name="freshBerries"><label>Fresh Berries</label><br>\
							<input type="checkbox" name="fruitCompote"><label>Fruit Compote</label><br>\
							<input type="checkbox" name="etc"><label>etc.</label><br>\
							<input type="checkbox" name="goldLeaf"><label>Gold Leaf</label><br>\
\
						</fieldset>\
					</div>\
				</div>\
			</div>\
			<div class="row">\
				<div class="col_abc">\
					<div class="mainpagebox">\
						<fieldset>\
							<legend>How can we get back to you?</legend>\
							<div class="formwrapper">\
								<label>Name<span class="required" title="Required field">*</span></label><br>\
								<input type="text" name="name" required><br>\
								<label>Email<span class="required" title="Required field">*</span></label><br>\
								<input type="email" name="email" required>\
							</div>\
							<div class="formwrapper">\
								<label>Billing address<span class="required" title="Required field">*</span></label><br>\
								<input type="billingAddress" name="name" required><br>\
								<input type="billingAddress2" name="email" required>\
							</div>\
							<div class="formwrapper">\
								<label>Message</label><br>\
								<textarea rows=4 cols=20 maxlength=250 name="message"></textarea>\
							</div><br>\
							<div style="clear: both; padding-top: .5em;">\
								<input type="checkbox" name="delivery" onclick="toggleDeliveryBox()" autocomplete="off"><label>Deliver to me! ($75 additional charge. Pittsburgh only.)</label>\
							</div>\
							<div style="padding-top: .5em;" id="deliveryAddress"></div>\
						</fieldset>\
					</div>\
				</div>\
			</div>\
			<div class="row">\
				<div class="col_abc">\
					<div class="submitbox">\
						<input type="submit" id="submit" value="Submit"><br>\
					</div>\
				</div>\
			</div>\
		</form>\
'

var pieForm = '<form id="pieForm">\
			<div class="row">\
				<div class="col_abc">\
					<div class="mainpagebox">\
							<fieldset>\
								<legend>Pie options</legend>\
								<div style="float:left; padding-right: 2em;">\
									<label>Flavor<span class="required" title="Required field">*</span></label><br>\
									<select name="pieFlavor" form="cakeForm" required>\
										<option value=""></option>\
										<option value="apple">Apple</option>\
										<option value="squash">Butternut Squash</option>\
										<option value="mango">Mango </option>\
										<option value="coconut">Coconut Cream</option>\
										<option value="chocolate">Chocolate Cream</option>\
										<option value="vanilla">Vanilla Custard</option>\
										<option value="pumpkin">Pumpkin</option>\
										<option value="sweetPotato">Sweet Potato</option>\
										<option value="butterscotch">Butterscotch</option>\
										<option value="pecan">Pecan </option>\
										<option value="banana">Banana Cream</option>\
									</select>\
								</div>\
								<div style="float:left;">\
									<label>Quantity<span class="required" title="Required field">*</span></label><br>\
									<input type="number" name="quantity" min=1 max=10 step=1 required>\
								</div>\
							</fieldset>\
						</div>\
						<div style="clear: both;">\
						</div>\
					</div>\
				</div>\
			</div>\
			<div class="row">\
				<div class="col_abc">\
					<div class="mainpagebox">\
						<fieldset>\
							<legend>How can we get back to you?</legend>\
							<div class="formwrapper">\
								<label>Name<span class="required" title="Required field">*</span></label><br>\
								<input type="text" name="name" required><br>\
								<label>Email<span class="required" title="Required field">*</span></label><br>\
								<input type="email" name="email" required>\
							</div>\
							<div class="formwrapper">\
								<label>Billing address<span class="required" title="Required field">*</span></label><br>\
								<input type="billingAddress" name="name" required><br>\
								<input type="billingAddress2" name="email" required>\
							</div>\
							<div class="formwrapper">\
								<label>Message</label><br>\
								<textarea rows=4 cols=20 maxlength=250 name="message"></textarea>\
							</div><br>\
							<div style="clear: both; padding-top: .5em;">\
								<input type="checkbox" name="delivery" onclick="toggleDeliveryBox()" autocomplete="off"><label>Deliver to me! ($75 additional charge. Pittsburgh only.)</label>\
							</div>\
							<div style="padding-top: .5em;" id="deliveryAddress"></div>\
						</fieldset>\
					</div>\
				</div>\
			</div>\
			<div class="row">\
				<div class="col_abc">\
					<div class="submitbox">\
						<input type="submit" id="submit" value="Submit"><br>\
					</div>\
				</div>\
			</div>\
		</form>\
'

var specialMessage = '\
			<div class="row">\
				<div class="col_abc">\
					<div class="mainpagebox">\
						<p>\
							We do special events! Please see the <a href="about.html">about page</a> for more information.\
						</p>\
					</div>\
				</div>\
			</div>\
'

/* Actual Javascript starts */
function showCakeForm() {
	$("#formbox").html(cakeForm);
}

function showPieForm() {
	$("#formbox").html(pieForm);
}

function showSpecialMessage() {
	$("#formbox").html(specialMessage);
}

function toggleDeliveryBox() {
	console.log($("#deliveryAddress").html())
	if ($("#deliveryAddress").html() == "") {
		console.log("Displaying additional form field.")
		$("#deliveryAddress").html('<label>Delivery address<span class="required" title="Required field">*</span></label><br><input type="text" name="deliveryAddress" required><br><input type="text" name="deliveryAddress2" required>');
	}
	else {
		console.log("Hiding additional form field.")
		$("#deliveryAddress").html("");
	}
}