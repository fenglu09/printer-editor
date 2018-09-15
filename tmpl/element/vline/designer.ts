import Designer from '../../editor/core/designer';
import PropsDesc from '../../editor/const/props-desc';
import Convert from '../../util/converter';
import CNC from '../../cainiao/const';
import I18n from '../../i18n/index';
let Base = Designer.prototype;
export default Designer.extend({
    init() {
        let me = this;
        me.updater.set({
            elementPath: '@./index'
        });
        Base.init.apply(me, arguments);
    }
}, {
        title: '@{element.line.v}',
        type: 'vline',
        modifier: {
            resize: true,
            resizeY: true
        },
        getProps(x, y) {
            return {
                zIndex: 0,
                x: 0 + x,
                y: 0 + y,
                rotate: 0,
                width: 1.33,
                type: 'solid',
                height: 75.59,
                locked: false,
                tip: I18n('@{element.line.v}')
            };
        },
        props: [{
            tip: '@{element.x}',
            key: 'x',
            type: PropsDesc.NUMBER,
            fixed: 2,
            read: Convert["@{pixel.to.millimeter}"],
            write: Convert["@{millimeter.to.pixel}"]
        }, {
            tip: '@{element.y}',
            key: 'y',
            type: PropsDesc.NUMBER,
            fixed: 2,
            read: Convert["@{pixel.to.millimeter}"],
            write: Convert["@{millimeter.to.pixel}"]
        }, {
            tip: '@{element.line.width}',
            key: 'height',
            type: PropsDesc.NUMBER,
            min: 0.01,
            fixed: 2,
            max: 2800,
            read: Convert["@{pixel.to.millimeter}"],
            write: Convert["@{millimeter.to.pixel}"]
        }, {
            tip: '@{element.line.height}',
            key: 'width',
            type: PropsDesc.NUMBER,
            min: 0.01,
            fixed: 2,
            max: 2800,
            read: Convert["@{pixel.to.pt}"],
            write: Convert["@{pt.to.pixel}"]
        }, {
            tip: '@{element.line.style}',
            key: 'type',
            type: PropsDesc.DROPDOWN,
            textKey: 'text',
            valueKey: 'value',
            items: CNC.LINE_TYPES
        }, {
            type: PropsDesc.SPLITER
        }, {
            tip: '@{element.lock}',
            key: 'locked',
            type: PropsDesc.BOOLEAN,
            role: 'free'
        }, {
            tip: '@{element.name}',
            key: 'tip',
            type: PropsDesc.INPUT,
            role: 'free'
        }],
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path d="M 29 10 L 29 50" style="stroke:#fff;stroke-width:2"/></svg>`
    });