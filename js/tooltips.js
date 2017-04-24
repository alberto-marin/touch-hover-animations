// Function to add tooltips to anchors

var anchors = document.querySelectorAll('.anchor-tip');
anchors.forEach(anchor => {
  var title = anchor.getAttribute('title'),
    tooltip = document.createElement('span');
  tooltip.className = 'title-tooltip';
  tooltip.innerHTML = title;
  anchor.appendChild(tooltip);
});
