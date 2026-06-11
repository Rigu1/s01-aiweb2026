const page = window.projectPage;

function setText(selector, value) {
  const element = document.querySelector(selector);
  if (element && value) {
    element.textContent = value;
  }
}

function createElement(tagName, className, html) {
  const element = document.createElement(tagName);
  if (className) {
    element.className = className;
  }
  if (html) {
    element.innerHTML = html;
  }
  return element;
}

function renderParagraphs(parent, paragraphs = []) {
  paragraphs.forEach((text) => {
    parent.append(createElement("p", "", text));
  });
}

function renderCheckList(items = []) {
  const list = createElement("ul", "check-list");

  items.forEach((item) => {
    const row = createElement("li");
    const mark = createElement("span", item.checked ? "checked" : "empty-check");
    mark.textContent = item.checked ? "✓" : "□";

    const text = createElement("span");
    text.textContent = item.text;

    row.append(mark, text);
    list.append(row);
  });

  return list;
}

function renderStackGrid(items = []) {
  const grid = createElement("div", "stack-blocks");

  items.forEach((group) => {
    const groupEl = createElement("div", "stack-group");
    groupEl.append(createElement("h3", "stack-group-title", group.group));

    const blocks = createElement("div", "stack-group-blocks");
    group.entries.forEach((item) => {
      const block = createElement("div", "stack-block");
      const label = createElement("span", "stack-label");
      const meta = createElement("span", "stack-meta");
      label.textContent = item.label;
      meta.textContent = item.meta;
      block.append(label, meta);
      blocks.append(block);
    });

    groupEl.append(blocks);
    grid.append(groupEl);
  });

  return grid;
}

function renderFeatureCards(items = []) {
  const grid = createElement("div", "feature-notes");

  items.forEach((item, index) => {
    const card = createElement("article", "feature-note");
    const number = createElement("span", "feature-number");
    number.textContent = String(index + 1).padStart(2, "0");
    card.append(number);
    card.append(createElement("h3", "", item.label));
    card.append(createElement("p", "", item.text));
    grid.append(card);
  });

  return grid;
}

function renderFlow(items = []) {
  const flow = createElement("div", "flow-blocks");

  items.forEach((item, index) => {
    const step = createElement("div", "flow-step");
    const number = createElement("span", "flow-number");
    number.textContent = String(index + 1);
    step.append(number);
    step.append(createElement("span", "flow-label", item));
    flow.append(step);
  });

  return flow;
}

function renderPairedPanels(section) {
  const panels = createElement("div", "paired-panels");

  section.panels.forEach((panel) => {
    const card = createElement("article", "paired-panel");
    card.append(createElement("h3", "", panel.label));
    card.append(createElement("p", "", panel.text));
    panels.append(card);
  });

  return panels;
}

function renderList(section) {
  if (!section.listType || !section.items?.length) {
    return null;
  }

  if (section.listType === "check") {
    return renderCheckList(section.items);
  }

  if (section.listType === "stack") {
    return renderStackGrid(section.items);
  }

  if (section.listType === "feature") {
    return renderFeatureCards(section.items);
  }

  if (section.listType === "flow") {
    return renderFlow(section.items);
  }

  const tagName = section.listType === "ordered" ? "ol" : "ul";
  const list = createElement(tagName);

  section.items.forEach((item) => {
    list.append(createElement("li", "", item));
  });

  return list;
}

function renderProjectContent() {
  const root = document.querySelector("#project-content");
  if (!root || !page?.sections) {
    return;
  }

  root.innerHTML = "";

  page.sections.forEach((section) => {
    const wrapper = createElement(
      section.type === "summary" ? "article" : "section",
      section.type === "summary" ? "project-summary" : "project-section"
    );

    if (section.type) {
      wrapper.classList.add(`section-${section.type}`);
    }

    if (section.listType) {
      wrapper.classList.add(`section-${section.listType}`);
    }

    if (section.eyebrow) {
      wrapper.append(createElement("p", "week-label", section.eyebrow));
    }

    wrapper.append(createElement("h2", "", section.title));
    renderParagraphs(wrapper, section.paragraphs);

    if (section.type === "paired") {
      wrapper.append(renderPairedPanels(section));
    }

    const list = renderList(section);
    if (list) {
      wrapper.append(list);
    }

    if (section.note) {
      wrapper.append(createElement("p", "note", section.note));
    }

    root.append(wrapper);
  });
}

setText(".hero h1", page?.title);
renderProjectContent();
