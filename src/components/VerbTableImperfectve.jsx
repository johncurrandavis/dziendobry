
import Collapsible from "./Collapsible";
import "./VerbTable.css";

export default function VerbTableImperfective({ verb }) {

  return (

    <div>

      <Collapsible title="Present indicative" defaultOpen>

        <div id="my-flexbox">

          <table>

            <thead>
              <tr>
                <th>Singular</th>
                <th>Plural</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td><span className="light-text">ja</span> {verb.present_indicative.singular["first_person"]}</td>
                <td><span className="light-text">my</span> {verb.present_indicative.plural["first_person"]}</td>
              </tr>
              <tr>
                <td><span className="light-text">ty</span> {verb.present_indicative.singular["second_person"]}</td>
                <td><span className="light-text">wy</span> {verb.present_indicative.plural["second_person"]}</td>
              </tr>
              <tr>
                <td><span className="light-text">on/ona/ono</span> {verb.present_indicative.singular["third_person"]}</td>
                <td><span className="light-text">oni/one</span> {verb.present_indicative.plural["third_person"]}</td>
              </tr>
            </tbody>

          </table>

        </div>

      </Collapsible>

      <Collapsible title="Past indicative">

        <div id="my-flexbox">

          <table>

            <thead>
              <tr>
                <th colspan="3">Singular</th>
              </tr>

              <tr>
                <th>Masculine</th>
                <th>Feminine</th>
                <th>Neuter</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td><span className="light-text">ja</span> {verb.past_indicative.singular.masculine["first_person"]}</td>
                <td><span className="light-text">ja</span> {verb.past_indicative.singular.feminine["first_person"]}</td>
                <td><span className="light-text">ja</span> {verb.past_indicative.singular.neuter["first_person"]}</td>
              </tr>
              <tr>
                <td><span className="light-text">ty</span> {verb.past_indicative.singular.masculine["second_person"]}</td>
                <td><span className="light-text">ty</span> {verb.past_indicative.singular.feminine["second_person"]}</td>
                <td><span className="light-text">ty</span> {verb.past_indicative.singular.neuter["second_person"]}</td>
              </tr>
              <tr>
                <td><span className="light-text">on</span> {verb.past_indicative.singular.masculine["third_person"]}</td>
                <td><span className="light-text">ona</span> {verb.past_indicative.singular.feminine["third_person"]}</td>
                <td><span className="light-text">ono</span> {verb.past_indicative.singular.neuter["third_person"]}</td>
             </tr>
            </tbody>

          </table>

        </div>

        <div id="my-flexbox">

          <table>

            <thead>
              <tr>
                <th colspan="2">Plural</th>
              </tr>

              <tr>
                <th>Groups that include men</th>
                <th>All others</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td><span className="light-text">my</span> {verb.past_indicative.plural.groups_that_include_men["first_person"]}</td>
                <td><span className="light-text">my</span> {verb.past_indicative.plural.all_others["first_person"]}</td>
              </tr>

              <tr>
                <td><span className="light-text">wy</span> {verb.past_indicative.plural.groups_that_include_men["second_person"]}</td>
                <td><span className="light-text">wy</span> {verb.past_indicative.plural.all_others["second_person"]}</td>
              </tr>

              <tr>
                <td><span className="light-text">oni</span> {verb.past_indicative.plural.groups_that_include_men["third_person"]}</td>
                <td><span className="light-text">one</span> {verb.past_indicative.plural.all_others["third_person"]}</td>
              </tr>

            </tbody>

          </table>

        </div>

      </Collapsible>

      <Collapsible title="Future indicative">

        <div id="my-flexbox">

          <table>

            <thead>
              <tr>
                <th>Singular</th>
                <th>Plural</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td><span className="light-text">ja</span> {verb.future_indicative.singular["first_person"]}</td>
                <td><span className="light-text">my</span> {verb.future_indicative.plural["first_person"]}</td>
              </tr>
              <tr>
                <td><span className="light-text">ty</span> {verb.future_indicative.singular["second_person"]}</td>
                <td><span className="light-text">wy</span> {verb.future_indicative.plural["second_person"]}</td>
              </tr>
              <tr>
                <td><span className="light-text">on/ona/ono</span> {verb.future_indicative.singular["third_person"]}</td>
                <td><span className="light-text">oni/one</span> {verb.future_indicative.plural["third_person"]}</td>
              </tr>
            </tbody>

          </table>

        </div>

      </Collapsible>

    </div>

  );

}
