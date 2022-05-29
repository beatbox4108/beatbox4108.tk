title: サイトの設定
date: 1-1-2022 0:0
summary: 
type: page

ここから各種設定を行えます。
## フォントサイズ

**この設定を適用するとスタイルが崩れる可能性があります。**
<div style="display:flex">
    <div style="font-size:.5rem" onClick="setfontsize(0.5)">Aaあぁ (x0.5)</div>
    <div style="font-size:.75rem" onClick="setfontsize(0.75)">Aaあぁ (x0.75)</div>
    <div style="font-size:1rem" onClick="setfontsize(1)">Aaあぁ (x1)</div>
    <div style="font-size:1.5rem" onClick="setfontsize(1.5)">Aaあぁ (x1.5)</div>
    <div style="font-size:2rem" onClick="setfontsize(2)">Aaあぁ (x2)</div>
    <div style="font-size:3rem" onClick="setfontsize(3)">Aaあぁ (x3)</div>
</div>

## ローカルストレージ
### 利用設定
ローカルストレージに保存するデータを管理します。この設定の変更でのデータの削除は行いません。

現在の設定: <span class="settings localstorage_stat" onLoad="this.textContent=localstoragestat('get')">None</span>
- <button onClick="localstoragestat('accept')">すべて許可する `accept`</button> **デフォルト**
- <button onClick="localstoragestat('settings')">設定の保持のみ許可する `settings`</button>
- <button onClick="localstoragestat('apps')">アプリのデータのみ保持する `apps`</button>
- <button onClick="localstoragestat('minimum')">最低限 `minimum`</button>


### 削除
ローカルストレージに保存されているデータを削除します。
1. 削除する内容の選択  
<label><input type="checkbox" class="settings localstorage_del_settings">設定</label><br>
<label><input type="checkbox" class="settings localstorage_del_apps">アプリのデータ</label><br>

2. 削除に関する警告 **(必ずお読みください)**

<detalis>
    <summary>クリック・タップで展開</summary>
    <div>
    この操作を行ってデータの削除を行った場合、削除されたデータの復元はできません。
    この操作を行う前に、データのエクスポートを行うことを推奨します。
    </div>
</details>

<label><input type="checkbox" class="settings localstorage_del_accept">上記内容を読み、データの削除に同意します。</label><br>

3. データの削除 

<button onClick="if(document.querySelector('.settings.localstorage_del_accept').value){localstorage_delete({settings:document.querySelector('.settings.localstorage_del_settings').value,apps:document.querySelector('.settings.localstorage_del_apps').value})}">データの削除を行う</button>

