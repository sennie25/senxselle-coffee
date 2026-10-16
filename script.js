var PHONE = "093574141"; // number that receives order texts
var SHOP = "SenxSelle Coffee Shop";

// ===== PHOTOS: tries .jpg, then .jpeg, .png, .webp from the images folder =====
var EXTS = ["jpg"];
function nextExt(img) {
    var i = EXTS.indexOf(img.dataset.ext || "jpg");
    if (i < EXTS.length - 1) {
        img.dataset.ext = EXTS[i + 1];
        img.src = "images/" + img.dataset.key + "." + EXTS[i + 1];
    } else {
        img.remove(); // no photo found: the drawing stays visible
    }
}
function photo(key, alt) {
    return '<img src="images/' + key + '.jpg" data-key="' + key + '" data-ext="jpg" alt="' + alt + '" onerror="nextExt(this)">';
}

// ===== DRAWN PICTURES (shown when an item has no photo yet) =====
function svg(x) {
    return '<svg viewBox="0 0 100 100" aria-hidden="true">' + x + '</svg>';
}
function glass(c, extra) {
    return svg(
        '<path d="M30 24h40l-5 58H35z" fill="#fff" opacity=".6"/>' +
        '<path d="M32 42h36l-3 40H35z" fill="' + c + '"/>' +
        '<path d="M34 66h32l-1 16H35z" fill="#fff" opacity=".4"/>' +
        '<rect x="38" y="30" width="11" height="11" rx="2" fill="#fff" opacity=".85" transform="rotate(-12 43 35)"/>' +
        '<rect x="52" y="34" width="11" height="11" rx="2" fill="#fff" opacity=".75" transform="rotate(10 57 39)"/>' +
        '<path d="M58 8l5 44" stroke="#4B2E24" stroke-width="4" stroke-linecap="round"/>' +
        (extra || "")
    );
}

var ART = {
    hot: function (c) {
        return svg(
            '<ellipse cx="48" cy="86" rx="30" ry="4" fill="#4B2E24" opacity=".15"/>' +
            '<path d="M68 44h6a8 8 0 0 1 0 16h-7" fill="none" stroke="#fff" stroke-width="5"/>' +
            '<path d="M22 38h46v22a20 20 0 0 1-20 20h-6a20 20 0 0 1-20-20z" fill="#fff"/>' +
            '<ellipse cx="45" cy="38" rx="23" ry="5" fill="' + c + '"/>' +
            '<path d="M36 26c-4-5 4-8 0-13M48 26c-4-5 4-8 0-13M60 26c-4-5 4-8 0-13" fill="none" stroke="#4B2E24" stroke-width="3" stroke-linecap="round" opacity=".35"/>'
        );
    },
    iced: function (c) { return glass(c, ""); },
    tea: function (c) {
        return glass(c,
            '<circle cx="72" cy="26" r="10" fill="' + c + '"/>' +
            '<circle cx="72" cy="26" r="6.5" fill="#fff" opacity=".55"/>'
        );
    },
    croissant: function () {
        return svg(
            '<path d="M10 64c4-28 20-40 40-40s36 12 40 40c-6-4-10-4-14 0-6-6-12-6-18 0-6-6-12-6-18 0-6-6-12-6-18 0-4-4-8-4-12 0z" fill="#D99A4E"/>' +
            '<path d="M34 32l6 28M50 26v32M66 32l-6 28" stroke="#A8682A" stroke-width="3" stroke-linecap="round"/>'
        );
    },
    cookie: function () {
        return svg(
            '<circle cx="50" cy="52" r="32" fill="#C69C6D"/>' +
            '<g fill="#4B2E24"><circle cx="38" cy="42" r="4"/><circle cx="60" cy="40" r="4"/><circle cx="50" cy="56" r="4"/><circle cx="34" cy="62" r="3.5"/><circle cx="66" cy="62" r="4"/></g>'
        );
    },
    brownie: function () {
        return svg(
            '<rect x="20" y="30" width="60" height="44" rx="6" fill="#4B2E24"/>' +
            '<rect x="20" y="30" width="60" height="12" rx="6" fill="#6B3F2B"/>' +
            '<circle cx="36" cy="58" r="3" fill="#C69C6D"/><circle cx="56" cy="52" r="3" fill="#C69C6D"/><circle cx="66" cy="64" r="3" fill="#C69C6D"/>'
        );
    },
    roll: function () {
        return svg(
            '<circle cx="50" cy="52" r="32" fill="#D9A066"/>' +
            '<circle cx="50" cy="52" r="23" fill="none" stroke="#F5EBDD" stroke-width="4"/>' +
            '<circle cx="50" cy="52" r="12" fill="none" stroke="#F5EBDD" stroke-width="4"/>' +
            '<circle cx="50" cy="52" r="3" fill="#F5EBDD"/>'
        );
    },
    muffin: function () {
        return svg(
            '<path d="M30 52h40l-6 30H36z" fill="#8C5A3C"/>' +
            '<path d="M22 54a28 26 0 0 1 56 0z" fill="#C69C6D"/>' +
            '<g fill="#4B3F8C"><circle cx="38" cy="44" r="4"/><circle cx="54" cy="38" r="4"/><circle cx="64" cy="48" r="4"/></g>'
        );
    },
    donut: function () {
        return svg(
            '<circle cx="50" cy="52" r="34" fill="#D9A066"/>' +
            '<circle cx="50" cy="50" r="30" fill="#4B2E24"/>' +
            '<circle cx="50" cy="50" r="9" fill="#EAD6C0"/>' +
            '<g stroke="#F5EBDD" stroke-width="3" stroke-linecap="round"><path d="M30 38l4 2M66 40l4-2M36 66l3-3M62 64l3 3M50 26v4"/></g>'
        );
    },
    pasta: function (c) {
        return svg(
            '<path d="M18 54h64a32 28 0 0 1-64 0z" fill="#4B2E24"/>' +
            '<g fill="none" stroke-linecap="round">' +
            '<path d="M24 50c5-14 12-14 17 0s12 14 17 0 10-10 14-2" stroke="#4B2E24" stroke-opacity=".25" stroke-width="9"/>' +
            '<path d="M24 50c5-14 12-14 17 0s12 14 17 0 10-10 14-2" stroke="' + c + '" stroke-width="6"/>' +
            '<path d="M28 40c4-10 10-10 14 0s10 10 14 0 8-8 12-1" stroke="' + c + '" stroke-width="6"/></g>'
        );
    },
    fries: function (c) {
        return svg(
            '<g fill="' + c + '">' +
            '<rect x="32" y="18" width="7" height="36" rx="2" transform="rotate(-8 35 36)"/>' +
            '<rect x="42" y="14" width="7" height="40" rx="2"/>' +
            '<rect x="52" y="16" width="7" height="38" rx="2" transform="rotate(6 55 35)"/>' +
            '<rect x="61" y="22" width="7" height="32" rx="2" transform="rotate(14 64 38)"/></g>' +
            '<path d="M28 50h44l-4 36H32z" fill="#C0452B"/>'
        );
    },
    nuggets: function () {
        return svg(
            '<g fill="#D9923A" stroke="#A8682A" stroke-width="3">' +
            '<rect x="14" y="42" width="34" height="26" rx="13"/>' +
            '<rect x="48" y="34" width="34" height="28" rx="13"/>' +
            '<rect x="32" y="58" width="34" height="26" rx="13"/></g>'
        );
    },
    nachos: function () {
        return svg(
            '<g stroke="#B9791F" stroke-width="2">' +
            '<path d="M12 72L34 30l24 42z" fill="#F0B94A"/>' +
            '<path d="M40 74L62 28l24 46z" fill="#E8A83A"/>' +
            '<path d="M24 84l22-28 24 28z" fill="#F5C964"/></g>'
        );
    },
    sandwich: function () {
        return svg(
            '<rect x="14" y="62" width="72" height="14" rx="7" fill="#E0B07A"/>' +
            '<rect x="16" y="54" width="68" height="9" rx="3" fill="#F2A7A0"/>' +
            '<rect x="14" y="47" width="72" height="8" rx="4" fill="#879078"/>' +
            '<path d="M14 47a36 22 0 0 1 72 0z" fill="#E0B07A"/>'
        );
    },
    salad: function (c) {
        return svg(
            '<circle cx="34" cy="46" r="13" fill="#879078"/>' +
            '<circle cx="50" cy="40" r="15" fill="#9CAA88"/>' +
            '<circle cx="66" cy="46" r="13" fill="#879078"/>' +
            '<circle cx="44" cy="34" r="6" fill="' + c + '"/>' +
            '<circle cx="60" cy="46" r="5" fill="' + c + '"/>' +
            '<path d="M16 52h68a34 32 0 0 1-68 0z" fill="#fff"/>'
        );
    }
};

// ===== MENU DATA: [name, price, drawing, color]. Edit prices here =====
var MENU = [
    {
        id: "coffee", name: "Coffee", desc: "Freshly brewed and espresso-based favorites.", items: [
            ["Americano", 80, "hot", "#3a2218"], ["Café Latte", 100, "hot", "#B98B63"], ["Cappuccino", 100, "hot", "#A9784F"],
            ["Spanish Latte", 120, "iced", "#C9A27A"], ["Caramel Macchiato", 125, "iced", "#C27A3A"],
            ["Mocha Latte", 120, "iced", "#6B3F2B"], ["Vanilla Latte", 115, "iced", "#D9BE98"]]
    },
    {
        id: "non-coffee", name: "Non-Coffee", desc: "Creamy and refreshing drinks without coffee.", items: [
            ["Chocolate", 90, "iced", "#5A3325"], ["Matcha Latte", 110, "iced", "#8FA36B"], ["Strawberry Milk", 100, "iced", "#F0A8B5"],
            ["Cookies and Cream", 110, "iced", "#CFC6BD"], ["Taro Milk", 100, "iced", "#B79BD0"], ["Hot Chocolate", 85, "hot", "#5A3325"]]
    },
    {
        id: "fruit-tea", name: "Fruit Tea", desc: "Light, fruity, and refreshing iced drinks.", items: [
            ["Lemon Fruit Tea", 75, "tea", "#F2D24B"], ["Strawberry Fruit Tea", 85, "tea", "#E5566B"], ["Mango Fruit Tea", 85, "tea", "#F5A623"],
            ["Passion Fruit Tea", 85, "tea", "#F0B84A"], ["Blueberry Fruit Tea", 90, "tea", "#6E6AB8"], ["Lychee Fruit Tea", 85, "tea", "#F3C6C9"]]
    },
    {
        id: "pastries", name: "Pastries", desc: "Sweet treats and baked goods to pair with your drink.", items: [
            ["Butter Croissant", 75, "croissant"], ["Chocolate Chip Cookie", 45, "cookie"], ["Brownies", 55, "brownie"],
            ["Cinnamon Roll", 80, "roll"], ["Blueberry Muffin", 65, "muffin"], ["Chocolate Donut", 45, "donut"]]
    },
    {
        id: "pasta", name: "Pasta", desc: "Satisfying pasta dishes for lunch or dinner.", items: [
            ["Spaghetti Bolognese", 130, "pasta", "#C0452B"], ["Creamy Carbonara", 145, "pasta", "#F0DEB4"], ["Tuna Pesto Pasta", 150, "pasta", "#7E9B4E"],
            ["Garlic Butter Pasta", 120, "pasta", "#E8C46A"], ["Chicken Alfredo", 160, "pasta", "#F4EAD0"]]
    },
    {
        id: "snacks", name: "Snacks", desc: "Perfect for quick bites and sharing with friends.", items: [
            ["French Fries", 75, "fries", "#F2C94C"], ["Nachos", 100, "nachos"], ["Chicken Nuggets", 110, "nuggets"],
            ["Clubhouse Sandwich", 130, "sandwich"], ["Ham and Cheese Sandwich", 95, "sandwich"], ["Mozzarella Sticks", 110, "fries", "#F6E3A1"]]
    },
    {
        id: "salads", name: "Salads", desc: "Fresh, colorful, and lighter meal options.", items: [
            ["Garden Salad", 100, "salad", "#E5533D"], ["Caesar Salad", 130, "salad", "#E8D9A8"], ["Chicken Caesar Salad", 160, "salad", "#D9A066"],
            ["Tuna Salad", 140, "salad", "#E6A0A0"], ["Fruit Salad", 110, "salad", "#F2994A"]]
    }
];

// ===== HELPERS =====
function $(id) { return document.getElementById(id); }
function peso(n) { return "₱" + n.toLocaleString("en-PH"); }
// "Café Latte" -> "cafe-latte" (photo file: images/cafe-latte.jpg)
function slug(s) {
    return s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
function esc(s) {
    var map = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
    return s.replace(/[&<>"']/g, function (c) { return map[c]; });
}

var cart = {};
try { cart = JSON.parse(localStorage.getItem("senCart")) || {}; } catch (e) { cart = {}; }
var activeCat = MENU[0].id;

// ===== MENU =====
function renderTabs() {
    $("tabs").innerHTML = MENU.map(function (c) {
        return '<button class="tab" role="tab" data-cat="' + c.id + '" aria-selected="' + (c.id === activeCat) + '">' + c.name + '</button>';
    }).join("");
}

function renderGrid() {
    var cat = MENU.find(function (c) { return c.id === activeCat; });
    $("catDesc").textContent = cat.desc;
    $("menuGrid").innerHTML = cat.items.map(function (it) {
        var name = it[0], price = it[1], kind = it[2], color = it[3];
        return '<article class="card">' +
            '<div class="card-img">' + ART[kind](color) + photo(slug(name), esc(name)) + '</div>' +
            '<div class="card-body">' +
            '<h3>' + esc(name) + '</h3>' +
            '<div class="card-foot">' +
            '<span class="price">' + peso(price) + '</span>' +
            '<button class="add-btn" data-name="' + esc(name) + '" data-price="' + price + '">Add</button>' +
            '</div>' +
            '</div>' +
            '</article>';
    }).join("");
}

// ===== CART =====
function save() { try { localStorage.setItem("senCart", JSON.stringify(cart)); } catch (e) { } }
function entries() { return Object.keys(cart).map(function (k) { return cart[k]; }); }
function total() { return entries().reduce(function (s, i) { return s + i.price * i.qty; }, 0); }
function count() { return entries().reduce(function (s, i) { return s + i.qty; }, 0); }

function addItem(name, price) {
    var key = slug(name);
    if (!cart[key]) cart[key] = { name: name, price: price, qty: 0 };
    cart[key].qty++;
    save(); renderCart(); toast(name + " added");
}

function changeQty(key, delta) {
    if (!cart[key]) return;
    cart[key].qty += delta;
    if (cart[key].qty <= 0) delete cart[key];
    save(); renderCart();
}

function renderCart() {
    $("cartCount").textContent = count();
    $("cartTotal").textContent = peso(total());
    var keys = Object.keys(cart);
    if (!keys.length) {
        $("cartItems").innerHTML = '<p class="empty">Your order is empty. Pick something from the menu.</p>';
        return;
    }
    $("cartItems").innerHTML = keys.map(function (key) {
        var i = cart[key];
        return '<div class="line">' +
            '<span class="line-name">' + esc(i.name) + '</span>' +
            '<strong>' + peso(i.price * i.qty) + '</strong>' +
            '<span class="qty">' +
            '<button data-key="' + key + '" data-d="-1" aria-label="Remove one ' + esc(i.name) + '">−</button>' +
            '<span>' + i.qty + '</span>' +
            '<button data-key="' + key + '" data-d="1" aria-label="Add one ' + esc(i.name) + '">+</button>' +
            '<span class="line-sub">' + peso(i.price) + ' each</span>' +
            '</span>' +
            '</div>';
    }).join("");
}

function orderText() {
    var name = $("custName").value.trim();
    var note = $("custNote").value.trim();
    var lines = ["Hello " + SHOP + ", I would like to order:"];
    entries().forEach(function (i) {
        lines.push(i.qty + " x " + i.name + " - " + peso(i.price * i.qty));
    });
    lines.push("Total: " + peso(total()));
    if (name) lines.push("Name: " + name);
    if (note) lines.push("Note: " + note);
    return lines.join("\n");
}

// ===== DRAWER + TOAST =====
function openCart() {
    $("drawer").classList.add("open"); $("overlay").classList.add("show");
    $("drawer").setAttribute("aria-hidden", "false");
}
function closeCart() {
    $("drawer").classList.remove("open"); $("overlay").classList.remove("show");
    $("drawer").setAttribute("aria-hidden", "true");
}
var toastTimer;
function toast(msg) {
    var t = $("toast"); t.textContent = msg; t.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.classList.remove("show"); }, 1800);
}

// ===== EVENTS =====
$("tabs").addEventListener("click", function (e) {
    var b = e.target.closest(".tab"); if (!b) return;
    activeCat = b.dataset.cat; renderTabs(); renderGrid();
});
$("menuGrid").addEventListener("click", function (e) {
    var b = e.target.closest(".add-btn"); if (!b) return;
    addItem(b.dataset.name, Number(b.dataset.price));
});
$("cartItems").addEventListener("click", function (e) {
    var b = e.target.closest("button[data-key]"); if (!b) return;
    changeQty(b.dataset.key, Number(b.dataset.d));
});
$("openCart").addEventListener("click", openCart);
$("closeCart").addEventListener("click", closeCart);
$("overlay").addEventListener("click", closeCart);
document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeCart(); });
$("clearCart").addEventListener("click", function () { cart = {}; save(); renderCart(); });

$("sendOrder").addEventListener("click", function () {
    if (!count()) return toast("Add something to your order first");
    window.location.href = "sms:" + PHONE + "?&body=" + encodeURIComponent(orderText());
});
$("copyOrder").addEventListener("click", function () {
    if (!count()) return toast("Add something to your order first");
    if (navigator.clipboard) {
        navigator.clipboard.writeText(orderText()).then(
            function () { toast("Order copied"); },
            function () { toast("Could not copy. Select the text manually."); }
        );
    } else {
        toast("Could not copy. Select the text manually.");
    }
});

// ===== START =====
$("year").textContent = new Date().getFullYear();
$("heroArt").innerHTML = ART.iced("#C27A3A") + photo("hero", "Iced latte at SenxSelle Coffee Shop");
renderTabs(); renderGrid(); renderCart();

