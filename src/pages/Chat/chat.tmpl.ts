export const tmpl = `
    <div class='chat-page'>
      <div class="chat-list">
        {{{userInfo}}}
        {{{search}}}
        <div class='chat-list'>
          {{#each chatListItems}}
            <div class="chat-list-item">
              <div class='user-info-avatar'>
                {{#if imgSrc}}
                  <img src="{{imgSrc}}" alt=""/>
                {{else}}
                  <div class='no-avatar'>
                    <p>{{letters}}</p>
                  </div>
                {{/if}}
              </div>
              <div class='chat-info'>
                <div class='chat-info-meta'>
                  <p class="addressee">{{addressee}}</p>
                  <p class="date">{{date}}</p>
                </div>
                <div class='chat-info-data'>
                  {{#if you}}
                    <p class="you">Вы{{you}}</p>
                    <p class="messege">{{messege}}</p>
                  {{else}}
                    <p class="messege">{{messege}}</p>
                  {{/if}}
                </div>
              </div>
              {{#if counter}}
                <div class='counter'><p>{{counter}}</p></div>
              {{/if}}
            </div>
          {{/each}}
        </div>
      </div>
      {{#if id}}
      <div class="chat-window">

        <div class='chat-window-top'>
          <div class='addressee-top-container'><p>Джо Байданов</p></div>
        </div>
        <div class='chat-window-center'>
          <div class='chat-date'>
            <p>16.10.2023</p>
          </div>
          <div class='message-container right-message'>
            <div class='message my-message'>
              <p class="chat-message">Учитывая ключевые сценарии поведения, выбранный нами инновационный путь играет важную роль в формировании новых предложений. Равным образом, консультация с широким активом напрямую зависит от как самодостаточных, так и внешне зависимых концептуальных решений.</p>
              <div class='message-time'>
                <p>21:05</p>
              </div>
              <div class='read'>
                <div class='read-icon'></div>
              </div>
            </div>
          </div>
          <div class='message-container'>
            <div class='message addressee-message'>
              <p class="chat-message">Наше дело не так однозначно, как может показаться: постоянное информационно-пропагандистское обеспечение нашей деятельности в значительной степени обусловливает важность распределения внутренних резервов и ресурсов.</p>
              <div class='message-time'>
                <p>21:23</p>
              </div>
              <div class='unread'>
                <div class='unread-icon'></div>
              </div>
            </div>
          </div>
          <div class='chat-date'>
            <p>17.10.2023</p>
          </div>
          <div class='message-container right-message'>
            <div class='message my-message'>
              <p class="chat-message">ommodi ullam optio cum,</p>
              <div class='message-time'>
                <p>21:05</p>
              </div>
              <div class='read'>
                <div class='read-icon'></div>
              </div>
            </div>
          </div>
          <div class='message-container right-message'>
            <div class='message my-message'>
              <p class="chat-message">Разнообразный и богатый опыт говорит нам, что граница обучения кадров</p>
              <div class='message-time'>
                <p>21:05</p>
              </div>
              <div class='read'>
                <div class='read-icon'></div>
              </div>
            </div>
          </div>
          <div class='message-container right-message'>
            <div class='message my-message'>
              <p class="chat-message">способствует повышению качества переосмысления внешнеэкономических политик. Учитывая ключевые сценарии поведения, высокое качество позиционных исследований влечет за собой процесс внедрения и модернизации позиций, занимаемых участниками в отношении поставленных задач. </p>
              <div class='message-time'>
                <p>21:05</p>
              </div>
              <div class='read'>
                <div class='read-icon'></div>
              </div>
            </div>
          </div>
          <div class='message-container right-message'>
            <div class='message my-message'>
              <p class="chat-message">Имеется спорная точка зрения, гласящая примерно следующее:</p>
              <div class='message-time'>
                <p>21:05</p>
              </div>
              <div class='read'>
                <div class='read-icon'></div>
              </div>
            </div>
          </div>
          <div class='message-container'>
            <div class='message addressee-message'>
              <p class="chat-message">тщательные исследования конкурентов призывают нас к новым свершениям, которые, в свою очередь, должны быть объединены в целые кластеры себе подобных.</p>
              <div class='message-time'>
                <p>21:23</p>
              </div>
              <div class='unread'>
                <div class='unread-icon'></div>
              </div>
            </div>
          </div>
          <div class='chat-date'>
            <p>18.10.2023</p>
          </div>
          <div class='message-container right-message'>
            <div class='message my-message'>
              <p class="chat-message">ommodi ullam optio cum,</p>
              <div class='message-time'>
                <p>21:05</p>
              </div>
              <div class='read'>
                <div class='read-icon'></div>
              </div>
            </div>
          </div>
          <div class='message-container right-message'>
            <div class='message my-message'>
              <p class="chat-message">Повседневная практика показывает, что убеждённость некоторых оппонентов, а также свежий взгляд на привычные вещи — безусловно открывает новые горизонты для распределения внутренних резервов и ресурсов.</p>
              <div class='message-time'>
                <p>21:05</p>
              </div>
              <div class='read'>
                <div class='read-icon'></div>
              </div>
            </div>
          </div>
          <div class='message-container right-message'>
            <div class='message my-message'>
              <p class="chat-message">Каждый из нас понимает очевидную вещь: .</p>
              <div class='message-time'>
                <p>21:05</p>
              </div>
              <div class='read'>
                <div class='read-icon'></div>
              </div>
            </div>
          </div>
          <div class='message-container right-message'>
            <div class='message my-message'>
              <p class="chat-message">dolor illum doloremque</p>
              <div class='message-time'>
                <p>21:05</p>
              </div>
              <div class='read'>
                <div class='read-icon'></div>
              </div>
            </div>
          </div>
          <div class='message-container'>
            <div class='message addressee-message'>
              <p class="chat-message">А ещё акционеры крупнейших компаний неоднозначны и будут смешаны с не уникальными данными до степени совершенной неузнаваемости, из-за чего возрастает их статус бесполезности! Также как понимание сути ресурсосберегающих технологий предполагает независимые способы реализации как самодостаточных, так и внешне зависимых концептуальных решений. Прежде всего, социально-экономическое развитие позволяет оценить значение кластеризации усилий. Как принято считать, многие известные личности превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.</p>
              <div class='message-time'>
                <p>21:23</p>
              </div>
              <div class='unread'>
                <div class='unread-icon'></div>
              </div>
            </div>
          </div>
          <div class='chat-date'>
            <p>21.10.2023</p>
          </div>
          <div class='message-container right-message'>
            <div class='message my-message'>
              <p class="chat-message">Повседневная практика показывает</p>
              <div class='message-time'>
                <p>21:05</p>
              </div>
              <div class='read'>
                <div class='read-icon'></div>
              </div>
            </div>
          </div>
          <div class='message-container right-message'>
            <div class='message my-message'>
              <p class="chat-message">что дальнейшее развитие различных форм деятельности выявляет срочную потребность направлений прогрессивного развития</p>
              <div class='message-time'>
                <p>21:05</p>
              </div>
              <div class='read'>
                <div class='read-icon'></div>
              </div>
            </div>
          </div>
          <div class='message-container right-message'>
            <div class='message my-message'>
              <p class="chat-message">Сложно сказать, почему реплицированные с зарубежных источников, современные исследования призывают нас к новым свершениям, которые, в свою очередь, должны быть объективно рассмотрены соответствующими инстанциями. Таким образом, разбавленное изрядной долей эмпатии, рациональное мышление, а также свежий взгляд на привычные вещи — безусловно открывает новые горизонты для форм воздействия. Предварительные выводы неутешительны: укрепление и развитие внутренней структуры создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса первоочередных требований. В своём стремлении улучшить пользовательский опыт мы упускаем, что базовые сценарии поведения пользователей ассоциативно распределены по отраслям. И нет сомнений, что некоторые особенности внутренней политики могут быть в равной степени предоставлены сами себе.</p>
              <div class='message-time'>
                <p>21:05</p>
              </div>
              <div class='read'>
                <div class='read-icon'></div>
              </div>
            </div>
          </div>
          <div class='message-container right-message'>
            <div class='message my-message'>
              <p class="chat-message">Банальные, но неопровержимые выводы, а также представители современных социальных резервов освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, смешаны с не уникальными данными до степени совершенной неузнаваемости, из-за чего возрастает их статус бесполезности! </p>
              <div class='message-time'>
                <p>21:05</p>
              </div>
              <div class='read'>
                <div class='read-icon'></div>
              </div>
            </div>
          </div>
          <div class='message-container'>
            <div class='message addressee-message'>
              <p class="chat-message">В своём стремлении улучшить пользовательский опыт мы упускаем, что сделанные на базе интернет-аналитики выводы являются только методом политического участия и объединены в целые кластеры себе подобных. Однозначно, стремящиеся вытеснить традиционное производство, нанотехнологии лишь добавляют фракционных разногласий и объединены в целые кластеры себе подобных.</p>
              <div class='message-time'>
                <p>21:23</p>
              </div>
              <div class='unread'>
                <div class='unread-icon'></div>
              </div>
            </div>
          </div>
        </div>
        <div class='chat-window-bottom'>
        <div class='chat-window-bottom-wrapper'>
          <div class='media-add'>
            <div class='media-add-icon'></div>
          </div>
          <form class='message-form'>
            {{{messageInput}}}
            <button class='send-btn' type='submit'>
              <div class='send-btn-img'></div>
            </button>
          </form>

        </div>

        </div>
      </div>
      {{else}}
      <div class="chat-window">
        <div class="no-addressees">
          <h1>Выберете чат и начните общение</h1>
        </div>
      </div>
      {{/if}}
    </div>
`;
