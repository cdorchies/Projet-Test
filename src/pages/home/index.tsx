import Welcome from '../../components/organisms/welcome';
import Presentation from '../../components/organisms/presentation';
import Services from '../../components/organisms/services';

export default function Home() {
  return (
    <div id="HomePage">
      <Welcome />
      <Presentation />
      <Services />
    </div>
  )
}
