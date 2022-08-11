const mixins = {
  flexBox: (align = 'center', justify = 'center') => `
    display: flex;
    align-items: ${align};
    justify-content: ${justify};
  `,
  boxShadow: (alpha = 0.3) => `
    box-shadow: rgba(0, 0, 0, ${alpha}) 0px 5px 4px;
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
