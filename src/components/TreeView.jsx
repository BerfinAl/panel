import {
  IoChevronForwardOutline,
  IoChevronDown,
  IoReturnDownForwardSharp,
  IoPencilSharp,
  IoTrashOutline,
} from "react-icons/io5";
import TreeView, { flattenTree } from "react-accessible-treeview";
import "./treeview.css";

const folder = {
  name: "",
  children: [
    {
      name: "Bahçe",
      children: [
        { name: "Bahçe Aletleri ve Sulama Ekipmanları" },
        { name: "Bahçe Yapıları ve Çim Ekipmanları" },
      ],
    },
    {
      name: "Bebek",
      children: [
        {
          name: "Aktivite ve Eğlence",
          children: [{ name: "Aktivite Kitapları" }],
        },
        {
          name: "Alt Değiştirme",
          children: [{ name: "Alt Değiştirme Masaları" }],
        },
      ],
    },
    {
      name: "Bilgisayar",
      children: [
        {
          name: "3D Yazıcılar",
          children: [{ name: "Aksesuarlar" }],
        },
        {
          name: "Dizüstü Bilgisayarlar",
          children: [
            { name: "2'si 1 Arada Dizüstü Bilgisayarlar" },
            { name: "Geleneksel Dizüstü Bilgisayarlar" },
          ],
        },
      ],
    },
    {
      name: "Elektronik",
      children: [
        {
          name: "Bilgisayarlar, Bileşenleri ve Aksesuarları",
          children: [{ name: "Veri Depolama" }],
        },
        {
          name: "Cep Telefonları ve Aksesuarlar",
          children: [
            {
              name: "Cep Telefonları",
              children: [{ name: "Tuşlu Cep Telefonları" }],
            },
          ],
        },
      ],
    },
    {
      name: "Ev ve Yaşam",
      children: [
        {
          name: "Aydınlatma",
          children: [{ name: "Dış Mekan Aydınlatma" }],
        },
        { name: "Banyo", children: [{ name: "Banyo Tekstili" }] },
      ],
    },
  ],
};

const data = flattenTree(folder);

function BasicTreeView() {
  return (
    <div>
      <div className="ide">
        <TreeView
          data={data}
          aria-label="directory tree"
          className="hover"
          togglableSelect
          clickAction="FOCUS"
          nodeRenderer={({
            element,
            isBranch,
            isSelected,
            isExpanded,
            getNodeProps,
            level,
          }) => (
            <div {...getNodeProps()} style={{ paddingLeft: 20 * (level - 1) }}>
              {isBranch ? <FolderIcon isOpen={isExpanded} /> : <FileIcon />}
              <span className="name">{element.name} </span>
              {isSelected && <Icons />}
            </div>
          )}
        />
      </div>
    </div>
  );
}

const FolderIcon = ({ isOpen }) =>
  isOpen ? (
    <IoChevronDown color="e8a87c" className="icon" />
  ) : (
    <IoChevronForwardOutline color="e8a87c" className="icon" />
  );

const FileIcon = () => {
  return <IoReturnDownForwardSharp color="#e4a77d" />;
};

const Icons = () => {
  return (
    <div className="icons">
      <div className="edit">
        <IoPencilSharp size={"17px"} color="black" />
      </div>
      <div className="delete">
        <IoTrashOutline size={"17px"} color="red" />
      </div>
    </div>
  );
};

export default BasicTreeView;
