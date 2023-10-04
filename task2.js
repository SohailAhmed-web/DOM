function getAttributes() {
    const link = document.getElementById("w3r");

    // Get the specified attributes
    const href = link.getAttribute("href");
    const hreflang = link.getAttribute("hreflang");
    const rel = link.getAttribute("rel");
    const target = link.getAttribute("target");
    const type = link.getAttribute("type");

    // Display the attribute values
    alert(`href: ${href}\nhreflang: ${hreflang}\nrel: ${rel}\ntarget: ${target}\ntype: ${type}`);
  }