import { useState, ChangeEvent, FormEvent } from "react";
import { FaUserPlus, FaUserTie, FaBox } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";

export function PDV() {
    const [client, setClient] = useState('');
    const [clients, setClients] = useState<string[]>([]);
    const [newClient, setNewClient] = useState('');

    const [seller, setSeller] = useState('');
    const [sellers, setSellers] = useState<string[]>([]);
    const [newSeller, setNewSeller] = useState('');

    const [product, setProduct] = useState('');
    const [products, setProducts] = useState<string[]>([]);
    const [newProduct, setNewProduct] = useState('');

    const [paymentMethod, setPaymentMethod] = useState('');

    const handleClientChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setClient(e.target.value);
    };

    const handleNewClientChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewClient(e.target.value);
    };

    const handleClientSubmit = (e: FormEvent) => {
        e.preventDefault();
        setClients((prev) => [...prev, newClient]);
        setClient(newClient);
        setNewClient('');
    };

    const handleSellerChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setSeller(e.target.value);
    };

    const handleNewSellerChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewSeller(e.target.value);
    };

    const handleSellerSubmit = (e: FormEvent) => {
        e.preventDefault();
        setSellers((prev) => [...prev, newSeller]);
        setSeller(newSeller);
        setNewSeller('');
    };

    const handleProductChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setProduct(e.target.value);
    };

    const handleNewProductChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewProduct(e.target.value);
    };

    const handleProductSubmit = (e: FormEvent) => {
        e.preventDefault();
        setProducts((prev) => [...prev, newProduct]);
        setProduct(newProduct);
        setNewProduct('');
    };

    const handleSubmitSale = (e: FormEvent) => {
        e.preventDefault();
        console.log({
            client,
            seller,
            product,
            paymentMethod,
        });
        // Handle sale submission logic here
    };

    return (
        <div className="max-w-2xl mx-auto p-6 border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-300 dark:text-gray-300 mb-6">
                Ponto de Venda
            </h2>
            <form onSubmit={handleSubmitSale} className="space-y-6">
                
                {/* Client Selection */}
                <div>
                    <label htmlFor="client" className="block text-sm font-medium text-gray-300 dark:text-gray-300 mb-2">
                        Cliente
                    </label>
                    <select
                        id="client"
                        name="client"
                        value={client}
                        onChange={handleClientChange}
                        className="block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm bg-gray-800 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-indigo-400 dark:focus:border-indigo-400 sm:text-sm"
                    >
                        <option value="">Escolha um cliente</option>
                        {clients.map((c, index) => (
                            <option key={index} value={c}>{c}</option>
                        ))}
                    </select>
                    <div className="mt-2 flex gap-2">
                        <input
                            type="text"
                            value={newClient}
                            onChange={handleNewClientChange}
                            placeholder="Cadastrar novo cliente"
                            className="block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm bg-gray-800 text-white dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-indigo-400 dark:focus:border-indigo-400 sm:text-sm"
                        />
                        <button
                            type="button"
                            onClick={handleClientSubmit}
                            className="bg-indigo-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600"
                        >
                            <FaUserPlus size={20} />
                        </button>
                    </div>
                </div>

                {/* Seller Selection */}
                <div>
                    <label htmlFor="seller" className="block text-sm font-medium text-gray-300 dark:text-gray-300 mb-2">
                        Vendedor
                    </label>
                    <select
                        id="seller"
                        name="seller"
                        value={seller}
                        onChange={handleSellerChange}
                        className="block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm bg-gray-800 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-indigo-400 dark:focus:border-indigo-400 sm:text-sm"
                    >
                        <option value="">Escolha um vendedor</option>
                        {sellers.map((s, index) => (
                            <option key={index} value={s}>{s}</option>
                        ))}
                    </select>
                    <div className="mt-2 flex gap-2">
                        <input
                            type="text"
                            value={newSeller}
                            onChange={handleNewSellerChange}
                            placeholder="Cadastrar novo vendedor"
                            className="block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm bg-gray-800 text-white dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-indigo-400 dark:focus:border-indigo-400 sm:text-sm"
                        />
                        <button
                            type="button"
                            onClick={handleSellerSubmit}
                            className="bg-indigo-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600"
                        >
                            <FaUserTie size={20} />
                        </button>
                    </div>
                </div>

                {/* Product Selection */}
                <div>
                    <label htmlFor="product" className="block text-sm font-medium text-gray-300 dark:text-gray-300 mb-2">
                        Produto
                    </label>
                    <select
                        id="product"
                        name="product"
                        value={product}
                        onChange={handleProductChange}
                        className="block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm bg-gray-800 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-indigo-400 dark:focus:border-indigo-400 sm:text-sm"
                    >
                        <option value="">Escolha um produto</option>
                        {products.map((p, index) => (
                            <option key={index} value={p}>{p}</option>
                        ))}
                    </select>
                    <div className="mt-2 flex gap-2">
                        <input
                            type="text"
                            value={newProduct}
                            onChange={handleNewProductChange}
                            placeholder="Cadastrar novo produto"
                            className="block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm bg-gray-800 text-white dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-indigo-400 dark:focus:border-indigo-400 sm:text-sm"
                        />
                        <button
                            type="button"
                            onClick={handleProductSubmit}
                            className="bg-indigo-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600"
                        >
                            <FaBox size={20} />
                        </button>
                    </div>
                </div>

                {/* Payment Method Selection */}
                <div>
                    <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-300 dark:text-gray-300 mb-2">
                        Forma de Pagamento
                    </label>
                    <select
                        id="paymentMethod"
                        name="paymentMethod"
                        value={paymentMethod}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm bg-gray-800 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-indigo-400 dark:focus:border-indigo-400 sm:text-sm"
                    >
                        <option value="">Escolha uma forma de pagamento</option>
                        <option value="creditCard">Cartão de Crédito</option>
                        <option value="debitCard">Cartão de Débito</option>
                        <option value="cash">Dinheiro</option>
                        <option value="bankTransfer">Transferência Bancária</option>
                        </select>
                </div>
                {/* Submit Sale */}
                <div>
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600"
                    >
                        <MdAddShoppingCart size={20} />
                        Finalizar Venda
                    </button>
                </div>
            </form>
        </div>
    );
}