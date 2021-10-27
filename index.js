const draggable = ($target) => {
  $target.addEventListener("dragstart", (event) => {
    event.preventDefault();
  });

  const moveAt = (el, X, Y) => {
    // eslint-disable-next-line no-param-reassign
    el.style.left = `${X}px`;
    // eslint-disable-next-line no-param-reassign
    el.style.top = `${Y}px`;

    // el.style.transform = `translate(${X}px, ${Y}px)`;
  };

  $target.addEventListener("mousedown", (mouseDownEvent) => {
    const { target, clientX, clientY } = mouseDownEvent;
    const shiftX = clientX - target.getBoundingClientRect().left;
    const shiftY = clientY - target.getBoundingClientRect().top;

    target.classList.add("draggable");

    document.body.append(target);

    // moveAt(target, pageX - shiftX, pageY - shiftY);

    const onMouseMove = (mouseMoveEvent) =>
      moveAt(
        mouseMoveEvent.target,
        mouseMoveEvent.pageX - shiftX,
        mouseMoveEvent.pageY - shiftY
      );

    target.addEventListener("mousemove", onMouseMove);

    target.addEventListener(
      "mouseup",
      (mouseUpEvent) => {
        mouseUpEvent.target.removeEventListener("mousemove", onMouseMove);
      },
      { once: true }
    );
  });
};

const $target = document.querySelector(".target");
draggable($target);
