import { useSelector } from 'react-redux';

export default function UserName() {
  const fullName = useSelector((state) => state.user.fullName);
  const skillsCount = useSelector((state) => state.skills.skillsCount);

  return (
    <div className="user-name">
      <strong>{fullName ?? 'inconnu'}</strong>
      <span>
        {skillsCount} compétence{skillsCount > 1 ? 's' : ''}
      </span>
    </div>
  );
}
