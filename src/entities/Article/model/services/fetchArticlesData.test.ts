import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk';
import { ArticleTypes, BlockType } from '../../model/const/constants';
import { Article } from '../types/types';
import { fetchArticlesData } from '../../model/services/fetchArticlesData';

const article: Article = {
    id: '1',
    title: 'Javascript news',
    subtitle: 'Что нового в JS за 2022 год?',
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    user: {
        id: 1,
        username: 'Javascript news',
    },
    views: 1022,
    createdAt: '26.02.2022',
    type: [ArticleTypes.IT],
    blocks: [
        {
            id: '1',
            type: BlockType.TEXT,
            title: 'Заголовок этого блока',
            paragraphs: [
                'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
                'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
            ],
        },
        {
            id: '4',
            type: BlockType.CODE,
            code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
        },
        {
            id: '2',
            type: BlockType.IMAGE,
            src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
            title: 'Рисунок 1 - скриншот сайта',
        },
    ],
};

describe('fetchArticlesData.test', () => {
    test('test success', async () => {
        const data: Article = article;

        const testThunk = new TestAsyncThunk(fetchArticlesData);
        testThunk.api.get.mockReturnValue(Promise.resolve({ data }));
        const result = await testThunk.callAsyncThunk(1);

        expect(testThunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toEqual('fulfilled');
        expect(testThunk.api.get).toBeCalled();
        expect(result.payload).toEqual(data);
    });

    test('test fail', async () => {
        const testThunk = new TestAsyncThunk(fetchArticlesData);
        testThunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await testThunk.callAsyncThunk(1);

        expect(testThunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toEqual('rejected');
        expect(testThunk.api.get).toBeCalled();
    });

    test('test fail server', async () => {
        const testThunk = new TestAsyncThunk(fetchArticlesData);
        testThunk.api.get.mockReturnValue(Promise.reject());
        const result = await testThunk.callAsyncThunk(1);

        expect(testThunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toEqual('rejected');
        expect(testThunk.api.get).toBeCalled();
    });
});
