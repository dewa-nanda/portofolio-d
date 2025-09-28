/**
 * Reusable Card component
 *
 * @param {Object} props
 * @param {string} props.title - The header title of the card.
 * @param {React.ReactNode} props.children - Content inside the card.
 * @param {string} [props.className] - Optional custom styles for card wrapper.
 */
const Card = ({
  title,
  children,
  className = "",
}: {
  title?: string;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`text-amber-50 rounded-xl ${className}`}>
      {title && (
        <div className="p-3 text-start border-b-2 border-b-[#2a3647]">
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
      )}
      <div className="p-2 h-full">{children}</div>
    </div>
  );
};

export default Card;
