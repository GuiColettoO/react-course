import { HeaderContainer, HeaderContent, NewTransactionButton } from "./style";
import logoImg from "../../assets/Logo.svg";

export function Header() {
  return (
    <div>
      <HeaderContainer>
        <HeaderContent>
          <img src={logoImg} alt="dt money" />
          <NewTransactionButton>Nova transação</NewTransactionButton>
        </HeaderContent>
      </HeaderContainer>
    </div>
  );
}
