const mixins = {
  flexBox: (align = 'center', justify = 'center') => `
    display: flex;
    align-items: ${align};
    justify-content: ${justify};
  `,
  boxShadow: () => `
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  `,
  noScrollBar: () => `
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera*/
    }
  `,
};

export default mixins;
