document.addEventListener('DOMContentLoaded', () => {
    const fileGrid = document.getElementById('fileGrid');
    const searchInput = document.getElementById('searchInput');

    // Define your files and folders data
    // You can extend this with more properties like 'size', 'dateModified', etc.
    const files = [
        { name: 'Laporan_Keuangan_2024.pdf', type: 'pdf', icon: '📄',href:'library/my library.html'  },
        { name: 'Foto_Liburan_Bali.jpg', type: 'image', icon: '🖼️' },
        { name: 'Resep_Kue_Cokelat.docx', type: 'document', icon: '📝' },
        { name: 'Project_Website_Source_Code.zip', type: 'archive', icon: '📦' },
        { name: 'Presentasi_Marketing.pptx', type: 'document', icon: '📊' },
        { name: 'Catatan_Rapat.txt', type: 'document', icon: '📄' },
        { name: 'Music_Playlist.m3u', type: 'audio', icon: '🎵' },
        { name: 'Video_Tutorial_CSS.mp4', type: 'video', icon: '🎬' },
        { name: 'Database_Backup.sql', type: 'code', icon: '💾' },
        { name: 'Spreadsheet_Data_Produk.xlsx', type: 'document', icon: '📊' },
        { name: 'Design_Mockup.psd', type: 'image', icon: '🎨' },
        { name: 'README.md', type: 'code', icon: '📄' },
        { name: 'Project_Docs.zip', type: 'archive', icon: '📦' },
        { name: 'Important_Notes.txt', type: 'document', icon: '📝' },
        { name: 'Website_Assets.zip', type: 'archive', icon: '📦' },
        { name: 'Video_Demo.mp4', type: 'video', icon: '🎬' },
        { name: 'Code_Snippet.js', type: 'code', icon: '💻' }
    ];
    const folders = [
        { name: 'Dokumen Penting', icon: '📁' },
        { name: 'Foto Kenangan', icon: '📁' },
        { name: 'Proyek Aktif', icon: '📁' },
        { name: 'Arsip Lama', icon: '📁' }
    ];
    // Function to render files and folders
    function renderItems(itemsToRender) {
        fileGrid.innerHTML = ''; // Clear existing items

        folders.forEach(folder => {
            const folderElement = document.createElement('div');
            folderElement.classList.add('folder-item');
            folderElement.setAttribute('data-name', folder.name.toLowerCase());
            folderElement.innerHTML = `
                <div class="icon">${folder.icon}</div>
                <div class="name">${folder.name}</div>
            `;
            folderElement.addEventListener('click', () => {
                alert(`Folder dibuka: ${folder.name}`);
                // In a real application, you would navigate into this folder
            });
            fileGrid.appendChild(folderElement);
        });

        itemsToRender.forEach(file => {
            const fileElement = document.createElement('div');
            fileElement.classList.add('file-item');
            fileElement.setAttribute('data-type', file.type);
            fileElement.setAttribute('data-name', file.name.toLowerCase()); // For searching
            fileElement.innerHTML = `
                <div class="icon">${file.icon}</div>
                <div class="name">${file.name}</div>
            `;
            fileElement.addEventListener('click', () => {
                alert(`Membuka file: ${file.name} (Tipe: ${file.type.toUpperCase()})`);
                // In a real application, you would open or download the file
            });
            fileGrid.appendChild(fileElement);
        });
    }

    // Initial render of all files and folders
    renderItems(files);

    // Search functionality
    searchInput.addEventListener('keyup', (event) => {
        const searchTerm = event.target.value.toLowerCase();
        const filteredFiles = files.filter(file =>
            file.name.toLowerCase().includes(searchTerm)
        );
        // Note: For a more advanced search, you might filter folders as well
        renderItems(filteredFiles);
    });
});